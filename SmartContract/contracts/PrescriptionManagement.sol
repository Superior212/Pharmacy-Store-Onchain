// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrescriptionManagement {

    struct Prescription {
        address patient;
        address doctor;
        string prescription;
        bool validated;
    }

    mapping(address => string) patientPrescription; // Mapping patient to prescription

    // Mapping from prescription string to Prescription struct
    mapping(string => Prescription) private prescriptions;

    // Events
    event PrescriptionCreated(address indexed patient, address indexed doctor, string indexed prescription);

    // Custom Errors
    error InvalidPrescription();
    error PrescriptionAlreadyExists();
    error InvalidPrescriptionCode();
    error NotOwnerOfPrescription();
    error AddressZeroDetected();

    function addressZeroCheck(address _address) internal pure {
        if (_address == address(0)) revert AddressZeroDetected();
    }

    function addPrescription(
        address _patient, 
        string memory _prescriptionHash
    ) public {
        addressZeroCheck(msg.sender);
        addressZeroCheck(_patient);

        // Validate the prescription hash
        if (bytes(_prescriptionHash).length == 0 || bytes(_prescriptionHash).length < 46) {
            revert InvalidPrescriptionCode();
        }

        Prescription memory _prescription = Prescription({
            patient: _patient,
            doctor: msg.sender,
            prescription: _prescriptionHash,
            validated: false
        });

        prescriptions[_prescriptionHash] = _prescription;
        patientPrescription[_patient] = _prescriptionHash;

        emit PrescriptionCreated(_patient, msg.sender, _prescriptionHash);
    }

    function validatePrescription(
        string memory _prescriptionHash, 
        address _patient
    ) public view {
        addressZeroCheck(msg.sender);
        addressZeroCheck(_patient);

        string memory _prescription = patientPrescription[_patient];

        if (keccak256(abi.encodePacked(_prescription)) != keccak256(abi.encodePacked(_prescriptionHash))) {
            revert InvalidPrescriptionCode();
        }

        if (prescriptions[_prescriptionHash].validated) {
            revert InvalidPrescription();
        }
    }

    function getPrescription(string memory _prescriptionHash, address _patient) public view returns (Prescription memory) {
        validatePrescription(_prescriptionHash, _patient);
        
        return prescriptions[_prescriptionHash];
    }
}
