// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

contract UserManagement is Ownable {
    error NotDoctor();
    error NotPharmacy();
    error InvalidRole();
    error NotRegistered();
    error AlreadyRegistered();
    error AddressZeroDetected();

    enum Role { None, Customer, Pharmacy, Doctor }

    struct PatientProfile {
        string firstName;
        string lastName;
        string dob;
        string healthInfo;
        bool isRegistered;
    }

    struct PharmacyProfile {
        string storeName;
        uint32 businessNumber;
        string clinicName;
        string storeAddress;
        string pharmacyName;
        string ownerAddress;
        string licenseNumber;
        bool isRegistered;
        bool isVerified;
        string verificationHash;
    }

    struct DoctorProfile {
        string firstName;
        string lastName;
        string about;
        string yearsOfExperience;
        string clinicName;
        string licenseNumber;
        string medicalCertificateHash;
        bool isRegistered;
        bool isVerified;
        string verificationHash;
    }

    mapping(address => PatientProfile) private customerProfiles;
    mapping(address => PharmacyProfile) private pharmacyProfiles;
    mapping(address => DoctorProfile) private doctorProfiles;
    mapping(address => Role) private userRoles;

    event UserRegistered(address indexed user, Role role);
    event UserVerified(address indexed user, string verificationHash);

    constructor() Ownable(msg.sender) {}

    function _checkAddress() internal view {
        if (msg.sender == address(0)) {
            revert AddressZeroDetected();
        }
    }

    function registerPatient(
        string memory _firstName,
        string memory _lastName,
        string memory _dob,
        string memory _healthInfo
    ) public {
        _checkAddress(); 

        if (customerProfiles[msg.sender].isRegistered) {
            revert AlreadyRegistered();
        }

        customerProfiles[msg.sender] = PatientProfile(
            _firstName, _lastName, _dob, _healthInfo, true
        );
        userRoles[msg.sender] = Role.Customer;

        emit UserRegistered(msg.sender, Role.Customer);
    }

    function registerPharmacy(
        string memory _storeName,
        uint32 _businessNumber,
        string memory _clinicName,
        string memory _storeAddress,
        string memory _pharmacyName,
        string memory _ownerAddress,
        string memory _licenseNumber,
        string memory _verificationHash
    ) public {
        _checkAddress();

        if (pharmacyProfiles[msg.sender].isRegistered) {
            revert AlreadyRegistered();
        }

        pharmacyProfiles[msg.sender] = PharmacyProfile(
            _storeName, _businessNumber, _clinicName, _storeAddress,
            _pharmacyName, _ownerAddress, _licenseNumber, true, false, _verificationHash
        );

        userRoles[msg.sender] = Role.Pharmacy;

        emit UserRegistered(msg.sender, Role.Pharmacy);
    }

    function registerDoctor(
        string memory _firstName,
        string memory _lastName,
        string memory _about,
        string memory _yearsOfExperience,
        string memory _clinicName,
        string memory _licenseNumber,
        string memory _medicalCertificateHash,
        string memory _verificationHash
    ) public {
        _checkAddress();

        if (doctorProfiles[msg.sender].isRegistered) {
            revert AlreadyRegistered();
        }

        doctorProfiles[msg.sender] = DoctorProfile(
            _firstName, _lastName, _about, _yearsOfExperience, _clinicName,
            _licenseNumber, _medicalCertificateHash, true, false, _verificationHash
        );

        userRoles[msg.sender] = Role.Doctor;

        emit UserRegistered(msg.sender, Role.Doctor);
    }
}
