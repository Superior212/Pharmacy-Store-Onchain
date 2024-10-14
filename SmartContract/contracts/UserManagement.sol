// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

contract UserManagement is Ownable {
    error NotDoctor();
    error NotPharmacy();
    error InvalidRole();
    error NotRegistered();
    error AlreadyRegistered();
    error AlreadyHasRole();
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
        string pharmacyOwnerName;
        string storeLocation;
        string clinicName;
        string businessNumberCertificateHash;
        string licenseNumberCertificateHash;
        bool isRegistered;
        bool isVerified;
    }

    struct DoctorProfile {
        string firstName;
        string lastName;
        string about;
        uint32 yearsOfExperience;
        string clinicName;
        uint32 licenseNumber;
        string medicalCertificateHash;
        bool isRegistered;
        bool isVerified;
    }

    mapping(address => PatientProfile) private customerProfiles;
    mapping(address => PharmacyProfile) private pharmacyProfiles;
    mapping(address => DoctorProfile) private doctorProfiles;
    mapping(address => Role) private userRoles;

    event UserRegistered(address indexed user, Role role);
    event UserVerified(address indexed user);

    constructor() Ownable(msg.sender) {}

    function _checkAddress() internal view {
        if (msg.sender == address(0)) {
            revert AddressZeroDetected();
        }
    }

    function _checkRole() internal view {
        if (userRoles[msg.sender] != Role.None) {
            revert AlreadyHasRole();
        }
    }

    function registerPatient(
        string memory _firstName,
        string memory _lastName,
        string memory _dob,
        string memory _healthInfo
    ) public {
        _checkAddress(); 
        _checkRole();

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
        string memory _pharmacyOwnerName,
        string memory _storeLocation,
        string memory _clinicName,
        string memory _businessNumberCertificateHash,
        string memory _licenseNumberCertificateHash
    ) public {
        _checkAddress();
        _checkRole();

        if (pharmacyProfiles[msg.sender].isRegistered) {
            revert AlreadyRegistered();
        }

        pharmacyProfiles[msg.sender] = PharmacyProfile(
            _storeName, _businessNumber, _pharmacyOwnerName,
            _storeLocation, _clinicName, _businessNumberCertificateHash, _licenseNumberCertificateHash, true, false
        );

        userRoles[msg.sender] = Role.Pharmacy;

        emit UserRegistered(msg.sender, Role.Pharmacy);
    }

    function registerDoctor(
        string memory _firstName,
        string memory _lastName,
        string memory _about,
        uint32 _yearsOfExperience,
        string memory _clinicName,
        uint32 _licenseNumber,
        string memory _medicalCertificateHash
    ) public {
        _checkAddress();
        _checkRole();

        if (doctorProfiles[msg.sender].isRegistered) {
            revert AlreadyRegistered();
        }

        doctorProfiles[msg.sender] = DoctorProfile(
            _firstName, _lastName, _about, _yearsOfExperience, _clinicName,
            _licenseNumber, _medicalCertificateHash, true, false
        );
        
        userRoles[msg.sender] = Role.Doctor;

        emit UserRegistered(msg.sender, Role.Doctor);
    }

    function getRole(address _user) public view returns (Role) {
        return userRoles[_user];
    }

    function getCustomerProfile(address _user) public view
        returns (string memory, string memory, string memory, string memory)
    {
        PatientProfile memory profile = customerProfiles[_user];
        if (!profile.isRegistered) revert NotRegistered();

        return (
            profile.firstName,
            profile.lastName,
            profile.dob,
            profile.healthInfo
        );
    }

    function getPharmacyProfile(address _user) public view
        returns ( string memory, uint32, string memory, string memory, 
                string memory, string memory, string memory, bool, bool
        )
    {
        PharmacyProfile memory profile = pharmacyProfiles[_user];
        if (!profile.isRegistered) revert NotRegistered();

        return (
            profile.storeName,
            profile.businessNumber,
            profile.pharmacyOwnerName,
            profile.storeLocation,
            profile.clinicName,
            profile.businessNumberCertificateHash,
            profile.licenseNumberCertificateHash,
            profile.isRegistered,
            profile.isVerified
        );
    }
}
