// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MedicineEscrow {
    // Custom errors
    error ZeroEscrowAmount();
    error TransactionAlreadyExists();
    error UnauthorizedRelease();
    error TransactionAlreadyCompleted();
    error NoFundsInEscrow();
    error InvalidOneTimeCode();
    error PaymentFailed();

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
        if (msg.value == 0) revert ZeroEscrowAmount();

        bytes32 transactionId = keccak256(abi.encodePacked(_transactionId));
        if (transactions[transactionId].buyer != address(0)) revert TransactionAlreadyExists();

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

        if (transaction.buyer != msg.sender) revert UnauthorizedRelease();
        if (transaction.isCompleted) revert TransactionAlreadyCompleted();
        if (transaction.amount == 0) revert NoFundsInEscrow();
        if (providedOneTimeCode != transaction.oneTimeCode) revert InvalidOneTimeCode();

        transaction.isCompleted = true;
        uint256 amount = transaction.amount;
        transaction.amount = 0;

        (bool success, ) = transaction.seller.call{value: amount}("");
        if (!success) revert PaymentFailed();

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