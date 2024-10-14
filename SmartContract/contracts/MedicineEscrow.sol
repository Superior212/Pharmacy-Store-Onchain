// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MedicineEscrow {
    // Struct to store details of each transaction
    struct Transaction {
        address payable buyer;
        address payable seller;
        uint256 amount;
        bool isCompleted;
        uint256 medicineId;
        uint32 oneTimeCode;
    }

    // Mapping from transaction ID to Transaction struct
    mapping(bytes32 => Transaction) public transactions;

    event EscrowCreated(
        bytes32 transactionId,
        address buyer,
        address seller,
        uint256 amount,
        uint256 medicineId,
        uint32 oneTimeCode
    );

    event PaymentReleased(
        bytes32 transactionId,
        address buyer,
        address seller,
        uint256 amount
    );

    function createEscrow(
        string memory _transactionId,
        address payable _seller,
        uint256 _medicineId
    ) external payable {
        require(msg.value > 0, "Escrow amount must be greater than 0");

        bytes32 transactionId = keccak256(abi.encodePacked(_transactionId));
        require(
            transactions[transactionId].buyer == address(0),
            "Transaction ID already exists"
        );

        uint32 oneTimeCode = generateOneTimeCode();

        transactions[transactionId] = Transaction({
            buyer: payable(msg.sender),
            seller: _seller,
            amount: msg.value,
            isCompleted: false,
            medicineId: _medicineId,
            oneTimeCode: oneTimeCode
        });

        emit EscrowCreated(
            transactionId,
            msg.sender,
            _seller,
            msg.value,
            _medicineId,
            oneTimeCode
        );
    }

    function releasePayment(
        string memory _transactionId,
        uint32 providedOneTimeCode
    ) external {
        bytes32 transactionId = keccak256(abi.encodePacked(_transactionId));
        Transaction storage transaction = transactions[transactionId];

        require(
            transaction.buyer == msg.sender,
            "Only the buyer can release the payment"
        );
        require(!transaction.isCompleted, "Transaction already completed");
        require(transaction.amount > 0, "No funds in escrow");
        require(
            providedOneTimeCode == transaction.oneTimeCode,
            "Invalid one-time code"
        );

        transaction.isCompleted = true;
        uint256 amount = transaction.amount;
        transaction.amount = 0;

        (bool success, ) = transaction.seller.call{value: amount}("");
        require(success, "Failed to send payment to seller");

        emit PaymentReleased(
            transactionId,
            transaction.buyer,
            transaction.seller,
            amount
        );
    }

    function getTransactionDetails(
        string memory _transactionId
    )
        external
        view
        returns (
            address buyer,
            address seller,
            uint256 amount,
            bool isCompleted,
            uint256 medicineId
        )
    {
        bytes32 transactionId = keccak256(abi.encodePacked(_transactionId));
        Transaction storage transaction = transactions[transactionId];
        return (
            transaction.buyer,
            transaction.seller,
            transaction.amount,
            transaction.isCompleted,
            transaction.medicineId
        );
    }

    function generateOneTimeCode() internal view returns (uint32) {
        uint256 randomNumber = uint256(
            keccak256(
                abi.encodePacked(block.timestamp, msg.sender, block.prevrandao)
            )
        );
        return uint32(randomNumber % 1000000);
    }
}
