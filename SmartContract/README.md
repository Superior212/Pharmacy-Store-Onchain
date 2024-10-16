# PHARMAX Contract

PharmaaX is a decentralized onchain Pharmacy Store application (Dapp) that allows users to browse, purchase, and manage prescription and over-the-counter (OTC) medications using blockchain technology. This project implements smart contracts for managing prescriptions, user registrations (patients, pharmacies, doctors), and dispute resolutions.

## Table of Contents

- [Features](#features)
- [Technology](#technology)
- [Contracts](#contracts)
- [Contract Deployment Links](#contract-Deployment-Links)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)



## Features

- Prescription Management: This allows doctors to create and validate prescriptions for patients.
- User Management: Supports registration and management of patient, pharmacy, and doctor profiles.
- Role Verification: Admin can verify user roles for enhanced security.
- Error Handling: Custom errors for efficient gas usage and better debugging.
- Event Logging: Emits events for critical actions, allowing for easier tracking on the blockchain.


## Technology

- Smart Contract
- Hardhat
- Lisk Testnet
- Decentralized Storage
- Oracle Integration

## Contracts

### PrescriptionManagement

- **Structs**:
  - `Prescription`: Stores prescription details (patient address, doctor address, prescription hash, validation status).

- **Functions**:
  - `addPrescription(address _patient, string memory _prescriptionHash)`: Allows a doctor to add a prescription for a patient.
  - `validatePrescription(string memory _prescriptionHash, address _patient)`: Validates a prescription against a patient's record.
  - `getPrescription(string memory _prescriptionHash, address _patient)`: Retrieves a prescription's details.

### UserManagement

- **Enums**:
  - `Role`: Defines user roles (None, Customer, Pharmacy, Doctor).

- **Structs**:
  - `PatientProfile`: Contains patient details.
  - `PharmacyProfile`: Contains pharmacy details.
  - `DoctorProfile`: Contains doctor details.

- **Functions**:
  - `registerPatient`: Registers a new patient profile.
  - `registerPharmacy`: Registers a new pharmacy profile.
  - `registerDoctor`: Registers a new doctor profile.
  - `verifyUser(address _user, Role role)`: Verifies a user's role (only callable by the owner).

### Util

- **Errors**:
  - Defines common errors related to disputes for better gas optimization.

- **Events**:
  - Logs dispute-related actions (raising and resolving disputes).


## Contract Deployment Links

- MedicineMarketPlace : [0xDb5Cee311F23bd0FA7c1f585bb703721e57457C5](https://sepolia-blockscout.lisk.com//address/0xDb5Cee311F23bd0FA7c1f585bb703721e57457C5#code)

- PrescriptionManagement : [0x82511dB9583299cA75eedAA67251786FAA363544](https://sepolia-blockscout.lisk.com/address/0x82511dB9583299cA75eedAA67251786FAA363544#code)

- UserManagement: [0x34B5D26FC98f4da8eD68b07F07BEcf3BEA16a9E0](https://sepolia-blockscout.lisk.com/address/0x34B5D26FC98f4da8eD68b07F07BEcf3BEA16a9E0#code)


## Usage

To deploy the contracts on a Lisk Testnet, use the following command:

```bash
npx hardhat ignition deploy ./ignition/modules/<script_name>.ts --network lisk-sepolia
```

### Interacting with the Contracts

You can interact with the contracts using a frontend application (https://pharmaax.vercel.app/) or directly via Blockscout (#contracts).


## Testing

Unit tests are were performed to check features functionality. To run tests, use

```bash
npx hardhat test
```


## License
Distributed under the MIT License.





