// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

contract UserManagement is Ownable {
    error NotDoctor();
    error NotPharmacy();
    error InvalidRole();
    error NotAccountOwner();
    error AlreadyRegistered();
    error AddressZeroDetected();

    enum Role {
        Customer,
        Pharmacy,
        Doctor
    }

    struct PatientProfile {
        string firstName;
        string lastName;
        string dob;
        string healthInfo;
        bool isRegistered;
    }

    struct PharmacyProfile {
        string storeName;
        uint16 businessNumber;
        string clinicName;
        string storeAddress;
        string pharmacyName;
        string ownerAddress;
        string licenseNumber;
        bool isRegistered;
        bool isVerified;
        bytes32 verificationHash;
    }

    struct DoctorProfile {
        string firstName;
        string lastName;
        string about;
        string yearsOfExperience;
        string clinicName;
        string licenseNumber;
        string medicalCertificate;
        bool isRegistered;
        bool isVerified;
        bytes32 verificationHash;
    }

    mapping(address => PatientProfile) private customerProfiles;
    mapping(address => PharmacyProfile) private pharmacyProfiles;
    mapping(address => DoctorProfile) private doctorProfiles;
    mapping(address => Role) private userRoles;

    event UserRegistered(address indexed user, Role role);
    event UserVerified(address indexed user, bytes32 verificationHash);

    constructor() Ownable(msg.sender) {}

   function registerPatient(
        string memory _firstName,
        string memory _lastName,
        string memory _dob,
        string memory _healthInfo ) public {

        if (msg.sender == address(0)) {
            revert AddressZeroDetected();
        }

        if (customerProfiles[msg.sender].isRegistered) {
            revert AlreadyRegistered();
        }

        customerProfiles[msg.sender] = PatientProfile(_firstName, _lastName, _healthInfo, _dob, true);
        userRoles[msg.sender] = Role.Customer;

        emit UserRegistered(msg.sender, Role.Customer);
    }
}
