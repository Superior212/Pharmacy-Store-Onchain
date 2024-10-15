// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "./Util.sol";

contract DisputeResolution is Util {
    struct Dispute {
        address customer;
        string reason;
        bool resolved;
        bool approveCustomer;
    }

    // Mapping to store disputes raised against each medicine by ID
    mapping(uint => Dispute) public disputes;

    // Modifier to ensure only the customer can raise a dispute
    modifier onlyCustomer(address customer) {
        if (msg.sender != customer) revert UnauthorizedAccess();
    }

    // Function to raise a dispute by the customer
    function raiseDispute(uint medicineId, string memory reason) external onlyCustomer(msg.sender) {
        // Check if the medicineId is valid (use your own validation for this)
        if (medicineId == 0) revert InvalidMedicineId();

        // Ensure a dispute hasn't been raised for this medicine before
        if (disputes[medicineId].customer != address(0)) revert DisputeAlreadyRaised();

        // Create a new dispute
        disputes[medicineId] = Dispute({
            customer: msg.sender,
            reason: reason,
            resolved: false,
            approveCustomer: false
        });

        // Emit the event for logging
        emit DisputeRaised(medicineId, msg.sender, reason);
    }

    // Function to resolve a dispute (could be called by an admin, arbitration system, or decentralized decision process)
    function resolveDispute(uint medicineId, bool approveCustomer) external {
        // Ensure the dispute exists
        Dispute storage dispute = disputes[medicineId];
        if (dispute.customer == address(0)) revert DisputeNotFound();

        // Ensure the dispute hasn't already been resolved
        if (dispute.resolved) revert InvalidDisputeResolution();

        // Set the dispute resolution status
        dispute.resolved = true;
        dispute.approveCustomer = approveCustomer;

        // Emit the event to log the resolution
        emit DisputeResolved(medicineId, approveCustomer);

        // If `approveCustomer` is true, you can integrate logic to refund the customer.
        // If false, payment could be released to the pharmacy (implementation in the escrow module).
    }

    // Function to view dispute details
    function getDispute(uint medicineId) external view returns (address customer, string memory reason, bool resolved, bool approveCustomer) {
        Dispute memory dispute = disputes[medicineId];
        if (dispute.customer == address(0)) revert DisputeNotFound();

        return (dispute.customer, dispute.reason, dispute.resolved, dispute.approveCustomer);
    }
}
