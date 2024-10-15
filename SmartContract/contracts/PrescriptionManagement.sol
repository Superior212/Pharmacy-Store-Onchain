// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IUserManagement.sol";

contract PrescriptionManagement is Ownable {

    struct Prescription {
        address patient;
        address doctor;
        string prescription;
        bool isValidated;
        bool isUsed;
    }

    IUserManagement public userManagement;

    mapping(address => string[]) private patientPrescriptions;
    mapping(string => Prescription) private prescriptions;
    mapping(address => mapping(address => bool)) private pharmacyAccess;

    event PrescriptionCreated(address indexed patient, address indexed doctor, string prescription);
    event AccessGranted(address indexed patient, address indexed pharmacy);
    event PrescriptionUsed(address indexed patient, string prescription);

    error DoctorNotVerified();
    error InvalidPrescription();
    error AddressZeroDetected();
    error NotAuthorizedDoctor();
    error NoAccessToPrescription();
    error PrescriptionAlreadyUsed();
    error InvalidPrescriptionCode();
    error NotOwnerOfPrescriptionOrAllowedToView();

    constructor(address _userManagementAddress) Ownable(msg.sender) {
        userManagement = IUserManagement(_userManagementAddress);
    }

    function addressZeroCheck(address _address) internal pure {
        if (_address == address(0)) revert AddressZeroDetected();
    }

    function addPrescription(
        address _patient, 
        string memory _prescriptionHash
    ) public {
        addressZeroCheck(msg.sender);
        addressZeroCheck(_patient);

        if (bytes(_prescriptionHash).length == 0 || bytes(_prescriptionHash).length < 45) {
            revert InvalidPrescriptionCode();
        }

        IUserManagement.Role role = userManagement.getRole(msg.sender);
        if (role != IUserManagement.Role.Doctor) {
            revert NotAuthorizedDoctor();
        }

        if (!userManagement.isDoctorVerified(msg.sender)) {
            revert DoctorNotVerified();
        }

        prescriptions[_prescriptionHash] = Prescription({
            patient: _patient,
            doctor: msg.sender,
            prescription: _prescriptionHash,
            isValidated: false,
            isUsed: false
        });

        patientPrescriptions[_patient].push(_prescriptionHash);

        emit PrescriptionCreated(_patient, msg.sender, _prescriptionHash);
    }

    function grantPharmacyAccess(address _pharmacy) public {
        addressZeroCheck(_pharmacy);

        IUserManagement.Role role = userManagement.getRole(_pharmacy);

        if (role != IUserManagement.Role.Pharmacy) {
            revert NoAccessToPrescription();
        }

        pharmacyAccess[msg.sender][_pharmacy] = true;

        emit AccessGranted(msg.sender, _pharmacy);
    }

    function validateAndUsePrescription(
        string memory _prescriptionHash, 
        address _patient
    ) public {
        addressZeroCheck(msg.sender);
        addressZeroCheck(_patient);

        if (!pharmacyAccess[_patient][msg.sender]) {
            revert NoAccessToPrescription();
        }

        Prescription storage prescription = prescriptions[_prescriptionHash];

        if (prescription.isUsed) {
            revert PrescriptionAlreadyUsed();
        }

        prescription.isValidated = true;
        prescription.isUsed = true;

        emit PrescriptionUsed(_patient, _prescriptionHash);
    }

    function getPrescription(string memory _prescriptionHash, address _patient )
             public view returns (Prescription memory) {

        Prescription memory prescription = prescriptions[_prescriptionHash];

        if (
            msg.sender != prescription.doctor &&
            msg.sender != prescription.patient &&
            !pharmacyAccess[_patient][msg.sender] &&
            msg.sender != owner()
        ) revert NotOwnerOfPrescriptionOrAllowedToView();

        return prescription;
    }
}
