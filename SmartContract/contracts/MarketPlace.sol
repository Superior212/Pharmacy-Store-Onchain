// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Marketplace {
    // Custom errors
    error UnauthorizedAccess();
    error InvalidMedicineId();
    error InsufficientStock();
    error MedicationExpired();
    error IncorrectPaymentAmount();
    error ZeroEscrowAmount();
    error TransactionAlreadyExists();
    error UnauthorizedRelease();
    error TransactionAlreadyCompleted();
    error NoFundsInEscrow();
    error InvalidOneTimeCode();
    error PaymentFailed();
    error DisputeAlreadyRaised();
    error DisputeNotFound();
    error InvalidDisputeResolution();
    error MedicationNotListed();
    error MedicationNotAvailable();

    struct Medication {
        uint256 id;
        string productName;
        string category;
        string imageUrl;
        uint256 pricePerUnit;
        uint256 stockQuantity;
        bool isListed;
        bool isAvailable;
        uint256 expiryDate;
        address owner;
        bool isPrescriptionRequired;
    }

    struct Transaction {
        address payable buyer;
        address payable seller;
        uint256 amount;
        bool isCompleted;
        uint256 medicineId;
        uint256 oneTimeCode;
        bool isCodeGenerated;
    }

    struct Dispute {
        address customer;
        string reason;
        bool resolved;
        bool approveCustomer;
    }

    uint256 public nextMedicationId = 1;
    uint256 public platformFeePercent = 2;
    address public platformAdmin;

    mapping(uint256 => Medication) public medications;
    mapping(bytes32 => Transaction) public transactions;
    mapping(uint256 => Dispute) public disputes;
    mapping(uint256 => bytes32) public medicationToEscrow;
    mapping(bytes32 => uint256) public escrowToOneTimeCode;

    event MedicationCreated(
        uint256 indexed id,
        string productName,
        uint256 pricePerUnit,
        uint256 stockQuantity,
        address indexed owner
    );
    event MedicationListedStatusUpdated(uint256 indexed id, bool isListed);
    event MedicationAvailabilityUpdated(uint256 indexed id, bool isAvailable);
    event MedicationPurchased(
        uint256 indexed id,
        address buyer,
        uint256 quantityBought,
        uint256 totalPrice
    );
    event EscrowCreated(
        bytes32 transactionId,
        address buyer,
        address seller,
        uint256 amount,
        uint256 medicineId,
        uint256 oneTimeCode
    );
    event PaymentReleased(
        bytes32 transactionId,
        address buyer,
        address seller,
        uint256 amount
    );
    event DisputeRaised(
        uint256 indexed medicineId,
        address indexed customer,
        string reason
    );
    event DisputeResolved(uint256 indexed medicineId, bool approvedForCustomer);
    event PlatformFeeUpdated(uint256 newFeePercent);
    event PurchaseEscrowCreated(
        uint256 indexed medicationId,
        bytes32 escrowId,
        address buyer,
        uint256 amount
    );

    modifier onlyOwner(uint256 _medicationId) {
        if (medications[_medicationId].owner != msg.sender)
            revert UnauthorizedAccess();
        _;
    }

    modifier onlyAdmin() {
        if (msg.sender != platformAdmin) revert UnauthorizedAccess();
        _;
    }

    constructor() {
        platformAdmin = msg.sender;
    }

    function createMedication(
        string memory _productName,
        string memory _category,
        string memory _imageUrl,
        uint256 _pricePerUnit,
        uint256 _stockQuantity,
        uint256 _expiryDate,
        bool _isPrescriptionRequired
    ) external {
        if (_stockQuantity == 0) revert InsufficientStock();

        medications[nextMedicationId] = Medication({
            id: nextMedicationId,
            productName: _productName,
            category: _category,
            imageUrl: _imageUrl,
            pricePerUnit: _pricePerUnit,
            stockQuantity: _stockQuantity,
            isListed: true,
            isAvailable: true,
            expiryDate: _expiryDate,
            owner: msg.sender,
            isPrescriptionRequired: _isPrescriptionRequired
        });

        emit MedicationCreated(
            nextMedicationId,
            _productName,
            _pricePerUnit,
            _stockQuantity,
            msg.sender
        );
        nextMedicationId++;
    }

    function purchaseMedication(
        uint256 _medicationId,
        uint256 _quantityBought
    ) external payable {
        Medication storage med = medications[_medicationId];

        if (!med.isListed) revert MedicationNotListed();
        if (!med.isAvailable) revert MedicationNotAvailable();
        if (med.stockQuantity < _quantityBought) revert InsufficientStock();
        if (med.expiryDate <= block.timestamp) revert MedicationExpired();

        uint256 totalPrice = med.pricePerUnit * _quantityBought;

        if (msg.value != totalPrice) revert IncorrectPaymentAmount();

        // Create a unique transaction ID
        string memory transactionId = string(
            abi.encodePacked("MED_", _medicationId, "_", block.timestamp)
        );
        bytes32 escrowId = createEscrow(
            transactionId,
            payable(med.owner),
            _medicationId,
            totalPrice
        );

        // Update medication stock
        med.stockQuantity -= _quantityBought;

        if (med.stockQuantity == 0) {
            med.isListed = false;
            med.isAvailable = false;
        }

        // Store the escrow ID for this medication purchase
        medicationToEscrow[_medicationId] = escrowId;

        emit MedicationPurchased(
            _medicationId,
            msg.sender,
            _quantityBought,
            totalPrice
        );
        emit PurchaseEscrowCreated(
            _medicationId,
            escrowId,
            msg.sender,
            totalPrice
        );
    }

    function createEscrow(
        string memory _transactionId,
        address payable _seller,
        uint256 _medicineId,
        uint256 _amount
    ) internal returns (bytes32) {
        bytes32 escrowId = keccak256(abi.encodePacked(_transactionId));
        if (transactions[escrowId].buyer != address(0))
            revert TransactionAlreadyExists();

        uint256 oneTimeCode = generateOneTimeCode();

        transactions[escrowId] = Transaction({
            buyer: payable(msg.sender),
            seller: _seller,
            amount: _amount,
            isCompleted: false,
            medicineId: _medicineId,
            oneTimeCode: oneTimeCode,
            isCodeGenerated: true
        });

        // Store the one-time code separately
        escrowToOneTimeCode[escrowId] = oneTimeCode;

        emit EscrowCreated(
            escrowId,
            msg.sender,
            _seller,
            _amount,
            _medicineId,
            oneTimeCode
        );

        return escrowId;
    }

    function releasePayment(
        uint256 _medicationId,
        uint256 providedOneTimeCode
    ) external {
        bytes32 escrowId = medicationToEscrow[_medicationId];
        Transaction storage transaction = transactions[escrowId];

        if (transaction.buyer != msg.sender) revert UnauthorizedRelease();
        if (transaction.isCompleted) revert TransactionAlreadyCompleted();
        if (transaction.amount == 0) revert NoFundsInEscrow();
        if (providedOneTimeCode != escrowToOneTimeCode[escrowId])
            revert InvalidOneTimeCode();

        transaction.isCompleted = true;
        uint256 amount = transaction.amount;
        transaction.amount = 0;

        uint256 platformFee = (amount * platformFeePercent) / 100;
        uint256 sellerPayment = amount - platformFee;

        payable(platformAdmin).transfer(platformFee);
        (bool success, ) = transaction.seller.call{value: sellerPayment}("");
        if (!success) revert PaymentFailed();

        emit PaymentReleased(
            escrowId,
            transaction.buyer,
            transaction.seller,
            amount
        );
    }

    function toggleListing(
        uint256 _medicationId
    ) external onlyOwner(_medicationId) {
        medications[_medicationId].isListed = !medications[_medicationId]
            .isListed;
        emit MedicationListedStatusUpdated(
            _medicationId,
            medications[_medicationId].isListed
        );
    }

    function updateAvailability(
        uint256 _medicationId,
        bool _isAvailable
    ) external onlyOwner(_medicationId) {
        medications[_medicationId].isAvailable = _isAvailable;
        emit MedicationAvailabilityUpdated(_medicationId, _isAvailable);
    }

    function unlistMedication(uint256 _medicationId) external onlyAdmin {
        medications[_medicationId].isListed = false;
        emit MedicationListedStatusUpdated(_medicationId, false);
    }

    function updatePlatformFee(uint256 _newFee) external onlyAdmin {
        platformFeePercent = _newFee;
        emit PlatformFeeUpdated(_newFee);
    }

    function getMedicationDetails(
        uint256 _medicationId
    ) public view returns (Medication memory) {
        return medications[_medicationId];
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
            uint256 medicineId,
            bool isCodeGenerated
        )
    {
        bytes32 transactionId = keccak256(abi.encodePacked(_transactionId));
        Transaction storage transaction = transactions[transactionId];
        return (
            transaction.buyer,
            transaction.seller,
            transaction.amount,
            transaction.isCompleted,
            transaction.medicineId,
            transaction.isCodeGenerated
        );
    }

    function raiseDispute(uint256 medicineId, string memory reason) external {
        if (medicineId == 0) revert InvalidMedicineId();
        if (disputes[medicineId].customer != address(0))
            revert DisputeAlreadyRaised();

        disputes[medicineId] = Dispute({
            customer: msg.sender,
            reason: reason,
            resolved: false,
            approveCustomer: false
        });

        emit DisputeRaised(medicineId, msg.sender, reason);
    }

    function resolveDispute(
        uint256 medicineId,
        bool approveCustomer
    ) external onlyAdmin {
        Dispute storage dispute = disputes[medicineId];
        if (dispute.customer == address(0)) revert DisputeNotFound();
        if (dispute.resolved) revert InvalidDisputeResolution();

        dispute.resolved = true;
        dispute.approveCustomer = approveCustomer;

        emit DisputeResolved(medicineId, approveCustomer);
    }

    function getDispute(
        uint256 medicineId
    )
        external
        view
        returns (
            address customer,
            string memory reason,
            bool resolved,
            bool approveCustomer
        )
    {
        Dispute memory dispute = disputes[medicineId];
        if (dispute.customer == address(0)) revert DisputeNotFound();
        return (
            dispute.customer,
            dispute.reason,
            dispute.resolved,
            dispute.approveCustomer
        );
    }

    function generateOneTimeCode() internal view returns (uint256) {
        uint256 randomNumber = uint256(
            keccak256(
                abi.encodePacked(block.timestamp, block.prevrandao, msg.sender)
            )
        );
        return (randomNumber % 900000) + 100000;
    }

    function getOneTimeCode(bytes32 escrowId) external view returns (uint256) {
        return escrowToOneTimeCode[escrowId];
    }
}
