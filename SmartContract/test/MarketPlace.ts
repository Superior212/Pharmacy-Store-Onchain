import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre, { ethers } from "hardhat";

describe("Marketplace", function () {
    async function deployMarketplaceFixture() {
        const [platformAdmin, otherAccount, admin, seller, buyer, anotherBuyer] = await hre.ethers.getSigners();
        const Marketplace = await hre.ethers.getContractFactory("Marketplace");
        const marketplace = await Marketplace.deploy();
      
        return { marketplace, platformAdmin, admin, seller, buyer, anotherBuyer, otherAccount };
    }

    describe("Deployment", function () {
        it("Should deploy and initialize the contract correctly", async function () {
            const { marketplace, platformAdmin } = await loadFixture(deployMarketplaceFixture);
            expect(await marketplace.platformAdmin()).to.equal(platformAdmin);
        });
    });

    describe("Medication Operations", function () {
        let marketplace;
        beforeEach(async function () {
            ({ marketplace } = await loadFixture(deployMarketplaceFixture));
        });

        it("Should create a medication", async function () {
            await marketplace.createMedication("Vitamin A", "Category A", "https://com/aspirin.jpg", ethers.parseEther("100"), 10, Date.now() + 86400000, false);

            // Checks if the medication details are correct
            const medication = await marketplace.getMedicationDetails(1);
            expect(medication.productName).to.equal("Vitamin A");
            expect(medication.pricePerUnit).to.equal(ethers.parseEther("100"));
            expect(medication.stockQuantity).to.equal(10);
            expect(medication.isListed).to.be.true;
            expect(medication.isAvailable).to.be.true;
        });

        it("Should toggle listing status of a medication", async function () {
            // First create medication
            await marketplace.createMedication("Medicine B", "Category B", "https://com/aspirin.jpg", ethers.parseEther("200"), 20, Date.now() + 86400000, false);

            await marketplace.toggleListing(1);

            const medication = await marketplace.getMedicationDetails(1);
            expect(medication.isListed).to.be.false;
        });

        it("Should update availability of a medication", async function () {
            // Create a medication first
            await marketplace.createMedication("Medicine C", "Category C", "https://com/aspirin.jpg", ethers.parseEther("300"), 30, Date.now() + 86400000, false);

            await marketplace.updateAvailability(1, false);

            const medication = await marketplace.getMedicationDetails(1);
            expect(medication.isAvailable).to.be.false;
        });

        it("Should unlist a medication by admin", async function () {
            // Create a medication first
            await marketplace.createMedication("Medicine D", "Category D", "https://com/aspirin.jpg", ethers.parseEther("400"), 40, Date.now() + 86400000, false);
            
            // then unlist
            await marketplace.unlistMedication(1);

            const medication = await marketplace.getMedicationDetails(1);
            expect(medication.isListed).to.be.false;
        });
    });

    describe("Marketplace Contract - Transaction Test", function () {
        let marketplace, seller, buyer;

        beforeEach(async function () {
            ({ marketplace, platformAdmin, admin, seller, buyer, anotherBuyer } = await loadFixture(deployMarketplaceFixture));

            // Creating a medication
            await marketplace.connect(seller).createMedication(
                "Aspirin",
                "Pain Relief",
                "https://com/aspirin.jpg",
                ethers.parseEther("0.1"),
                100,
                Math.floor(Date.now() / 1000) + 86400, 
                false 
            );
        });

        it("Should allow the owner to update listing status", async () => {
            const medicationId = 1;

            // Owner toggles listing status
            await marketplace.connect(seller).toggleListing(medicationId);
            const medicationDetails = await marketplace.getMedicationDetails(medicationId);

            // Check if the listing status was updated
            expect(medicationDetails.isListed).to.be.false;
        });

        it("Should not allow non-owners to toggle listing status", async () => {
            const medicationId = 1;

            // Non-owner tries to toggle the listing status
            await expect(marketplace.connect(buyer).toggleListing(medicationId)).to.be.revertedWith(
                "UnauthorizedAccess"
            );
        });


        it("Should allow generating a one-time code for a transaction", async () => {
            const medicationId = 1;
            const quantity = 2;
            const totalPrice = ethers.parseEther("0.2");

            // Buyer purchases medication and an escrow is created
            await marketplace.connect(buyer).purchaseMedication(medicationId, quantity, { value: totalPrice });

            // Fetch the escrow ID for the transaction
            const escrowId = await marketplace.medicationToEscrow(medicationId);

            // Retrieve the one-time code
            const oneTimeCode = await marketplace.getOneTimeCode(escrowId);
            expect(oneTimeCode).to.be.a("number");
        });

        it("Should allow releasing payment with valid one-time code", async () => {
            const medicationId = 1;
            const quantity = 2;
            const totalPrice = ethers.parseEther("0.2");

            // Buyer purchases medication and an escrow is created
            await marketplace.connect(buyer).purchaseMedication(medicationId, quantity, { value: totalPrice });

            // Fetch the escrow ID for the transaction logs
            const escrowId = await marketplace.medicationToEscrow(medicationId);

            //Buyer Retrieves the one-time code
            const oneTimeCode = await marketplace.getOneTimeCode(escrowId);

            // Buyer releases the payment using the one-time code
            await marketplace.connect(buyer).releasePayment(medicationId, oneTimeCode);

            // Check if the payment has been released successfully
            const transactionDetails = await marketplace.getTransactionDetails(escrowId);
            expect(transactionDetails.isCompleted).to.be.true;
        });

    });
});
