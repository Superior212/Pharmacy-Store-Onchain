// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MedicineMarketPlace {
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

    uint256 public nextMedicationId = 1;
    uint256 public platformFeePercent = 2;
    address public platformAdmin;

    mapping(uint256 => Medication) public medications;

    event MedicationCreated(uint256 indexed id, string productName, uint256 pricePerUnit, uint256 stockQuantity, address indexed owner);
    event MedicationListedStatusUpdated(uint256 indexed id, bool isListed);
    event MedicationAvailabilityUpdated(uint256 indexed id, bool isAvailable);
    event MedicationPurchased(uint256 indexed id, address buyer, uint256 quantityBought, uint256 totalPrice);

    error NotOwner();
    error NotAdmin();
    error InsufficientStock();
    error IncorrectPaymentAmount();
    error MedicationExpired();
    error MedicationNotListed();
    error MedicationNotAvailable();
    error InvalidStock();

    modifier onlyOwner(uint256 _medicationId) {
        if (medications[_medicationId].owner != msg.sender) revert NotOwner();
        _;
    }

    modifier onlyAdmin() {
        if (msg.sender != platformAdmin) revert NotAdmin();
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
        if (_stockQuantity <= 0) revert InvalidStock();

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

        emit MedicationCreated(nextMedicationId, _productName, _pricePerUnit, _stockQuantity, msg.sender);
        nextMedicationId++;
    }

    function purchaseMedication(uint256 _medicationId, uint256 _quantityBought) external payable {
        Medication storage med = medications[_medicationId];

        if (!med.isListed) revert MedicationNotListed();
        if (!med.isAvailable) revert MedicationNotAvailable();
        if (med.stockQuantity < _quantityBought) revert InsufficientStock();
        if (med.expiryDate <= block.timestamp) revert MedicationExpired();

        uint256 totalPrice = med.pricePerUnit * _quantityBought;
        if (msg.value != totalPrice) revert IncorrectPaymentAmount();

        med.stockQuantity -= _quantityBought;

        if (med.stockQuantity == 0) {
            med.isListed = false;
            med.isAvailable = false;
        }

        uint256 platformFee = (totalPrice * platformFeePercent) / 100;
        uint256 sellerPayment = totalPrice - platformFee;

        payable(platformAdmin).transfer(platformFee);
        payable(med.owner).transfer(sellerPayment);

        emit MedicationPurchased(_medicationId, msg.sender, _quantityBought, totalPrice);
    }

    function toggleListing(uint256 _medicationId) external onlyOwner(_medicationId) {
        medications[_medicationId].isListed = !medications[_medicationId].isListed;
        emit MedicationListedStatusUpdated(_medicationId, medications[_medicationId].isListed);
    }

    function updateAvailability(uint256 _medicationId, bool _isAvailable) external onlyOwner(_medicationId) {
        medications[_medicationId].isAvailable = _isAvailable;
        emit MedicationAvailabilityUpdated(_medicationId, _isAvailable);
    }

    function unlistMedication(uint256 _medicationId) external onlyAdmin {
        medications[_medicationId].isListed = false;
        emit MedicationListedStatusUpdated(_medicationId, false);
    }

    function updatePlatformFee(uint256 _newFee) external onlyAdmin {
        platformFeePercent = _newFee;
    }

    function getMedicationDetails(uint256 _medicationId) public view returns (Medication memory) {
        return medications[_medicationId];
    }
}
