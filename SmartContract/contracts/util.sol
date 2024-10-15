// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Util {
    // Custom Errors for better gas optimization
    error UnauthorizedAccess();
    error InvalidMedicineId();
    error DisputeAlreadyRaised();
    error DisputeNotFound();
    error InvalidDisputeResolution();

    // Events for logging dispute actions
    event DisputeRaised(uint indexed medicineId, address indexed customer, string reason);
    event DisputeResolved(uint indexed medicineId, bool approvedForCustomer);
}
