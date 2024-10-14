// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PharmX {

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
    event MedicationBought(uint256 indexed id, address buyer, uint256 quantityBought, uint256 totalPrice);

    modifier onlyOwner(uint256 medicationId) {
        require(medications[medicationId].owner == msg.sender, "Not the owner");
        _;
    }

    modifier onlyAdmin() {
        require(msg.sender == platformAdmin, "Not the admin");
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

        require(_stockQuantity > 0, "Stock must be greater than zero");

        medications[nextMedicationId] = Medication(
            nextMedicationId,
            _productName,
            _category,
            _imageUrl,
            _pricePerUnit,
            _stockQuantity,
            true, 
            true, 
            _expiryDate,
            msg.sender,
            _isPrescriptionRequired
        );
        emit MedicationCreated(nextMedicationId, _productName, _pricePerUnit, _stockQuantity, msg.sender);

        nextMedicationId++;
    }

    function purchaseMedication(uint256 medicationId, uint256 purchaseQuantity) external payable {

        Medication storage med = medications[medicationId];
        require(med.isListed, "Medication is not listed");
        require(med.isAvailable, "Medication is not available");
        require(med.stockQuantity >= purchaseQuantity, "Insufficient stock");
        require(med.expiryDate > block.timestamp, "Medication expired");
        uint256 totalPrice = med.pricePerUnit * purchaseQuantity;
        require(msg.value == totalPrice, "Incorrect payment");

        med.stockQuantity -= purchaseQuantity;

        if (med.stockQuantity == 0) {
            med.isListed = false;
            med.isAvailable = false;
        }

        uint256 platformFee = (totalPrice * platformFeePercent) / 100;
        uint256 sellerPayment = totalPrice - platformFee;

        payable(platformAdmin).transfer(platformFee);
        payable(med.owner).transfer(sellerPayment);

        emit MedicationBought(medicationId, msg.sender, purchaseQuantity, totalPrice);
    }

    function toggleListing(uint256 medicationId) external onlyOwner(medicationId) {
        medications[medicationId].isListed = !medications[medicationId].isListed;
        emit MedicationListedStatusUpdated(medicationId, medications[medicationId].isListed);
    }

    function updateAvailability(uint256 medicationId, bool _isAvailable) external onlyOwner(medicationId) {

        medications[medicationId].isAvailable = _isAvailable;
        emit MedicationAvailabilityUpdated(medicationId, _isAvailable);
    }

    function unlistMedication(uint256 medicationId) external onlyAdmin {
        medications[medicationId].isListed = false;
        emit MedicationListedStatusUpdated(medicationId, false);
    }

    function updatePlatformFee(uint256 newFee) external onlyAdmin {
        platformFeePercent = newFee;
    }

    function getMedicationDetails(uint256 medicationId) public view returns (Medication memory) {
        return medications[medicationId];
    }
}
