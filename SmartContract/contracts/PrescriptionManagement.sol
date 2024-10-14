// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrescriptionManagement {


  struct Prescription {
    address patient;
    address doctor;
    string prescription;
    bool validated;
  }

  mapping (address => string) patientPrescription; //mapping patient to prescription

  // Mapping from prescription string to Prescription struct
  mapping(string => Prescription) private prescription;

  // Events
  event prescriptionCreated(address indexed patient, address indexed doctor, string indexed prescription);

  // Custom Error
  error InvalidPrescription();
  error PrescriptionAlreadyExists();
  error InvalidPrescriptionCode();
  error NotOwnerOfPrescription();
  error AddressZeroDetected();

  function addressZeroCheck(address _address) internal pure {
    if(_address == address(0)) revert AddressZeroDetected();
  }

  function addPrescription(
    address _patient, 
    string memory _prescriptionHash
  ) public {
    
    addressZeroCheck(msg.sender);
    addressZeroCheck(_patient);

    // if(_prescriptionHash == "") revert InvalidPrescriptionCode();
    // if(_prescriptionHash.length < 46) revert InvalidPrescriptionCode();

    Prescription memory _prescription = Prescription(_patient, msg.sender, _prescriptionHash, false);

    prescription[_prescriptionHash] = _prescription;
    patientPrescription[_patient] = _prescriptionHash;

    emit prescriptionCreated( _patient, msg.sender, _prescriptionHash);
  }

  function validatePrescription(
    string memory _prescriptionHash, address _patient
  ) 
    public view {
      addressZeroCheck(msg.sender);
      addressZeroCheck(_patient);

      // if(prescription[_prescriptionHash] == "") revert InvalidPrescriptionCode();
      // if(_prescriptionHash.length < 46) revert InvalidPrescriptionCode();
      // if(patientPrescription[_patient] != _prescriptionHash) revert NotOwnerOfPrescription();
      if(prescription[_prescriptionHash].validated) revert InvalidPrescription();
  }

  function getPrescription(string memory _prescriptionHash, address _patient) public view returns (Prescription memory) {
    validatePrescription(_prescriptionHash, _patient);
    
    return prescription[_prescriptionHash];
  }

}
