import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre, { ethers } from "hardhat";

describe("UserManagement", function () {
  async function deployUserManagementFixture() {
    const [owner, patient, pharmacy, doctor, otherAccount] = await ethers.getSigners();

    const AddressZero = "0x0000000000000000000000000000000000000000";    
    const UserManagement = await ethers.getContractFactory("UserManagement");
    const userManagement = await UserManagement.deploy();
    
    return { userManagement, owner, patient, pharmacy, doctor, otherAccount, AddressZero };
  }

  describe("Deployment", function () {
    it("Should set the owner to the deployer", async function () {
      const { userManagement, owner } = await loadFixture(deployUserManagementFixture);
      expect(await userManagement.owner()).to.equal(owner.address);
    });
  });

  describe("Role Registration", function () {
    it("Should register a patient", async function () {
      const { userManagement, patient } = await loadFixture(deployUserManagementFixture);
      
      await userManagement.connect(patient).registerPatient("John", "Doe", "01/01/1980", "Healthy");
      
      const role = await userManagement.getRole(patient.address);
      expect(role).to.equal(1);

      const profile = await userManagement.getPatientProfile(patient.address);
      expect(profile[0]).to.equal("John");
    });

    it("Should register a pharmacy", async function () {
      const { userManagement, pharmacy } = await loadFixture(deployUserManagementFixture);
      
      await userManagement.connect(pharmacy).registerPharmacy(
        "PharmaStore", 12345, "Alice", "123 Main St", "Cert123", "LicenseHash"
      );

      const role = await userManagement.getRole(pharmacy.address);
      expect(role).to.equal(2);

      const profile = await userManagement.getPharmacyProfile(pharmacy.address);
      expect(profile[0]).to.equal("PharmaStore");
    });

    it("Should register a doctor", async function () {
      const { userManagement, doctor } = await loadFixture(deployUserManagementFixture);
      
      await userManagement.connect(doctor).registerDoctor(
        "Dr. John", "Smith", "Cardiologist", 10, "Heart Clinic", "License123", "CertHash"
      );

      const role = await userManagement.getRole(doctor.address);
      expect(role).to.equal(3);

      const profile = await userManagement.getDoctorProfile(doctor.address);
      expect(profile[0]).to.equal("Dr. John"); 
    });

    it("Should emit events on successful registration", async function () {
      const { userManagement, doctor } = await loadFixture(deployUserManagementFixture);
      
      await expect(userManagement.connect(doctor).registerDoctor(
        "Dr. John", "Smith", "Cardiologist", 10, "Heart Clinic", "License123", "CertHash"
      ))
      .to.emit(userManagement, "DoctorRegistered")
      .withArgs(doctor.address, 3);
    });
  });

  describe("Error Handling", function () {
    it("Should revert if an address is already registered", async function () {
      const { userManagement, doctor } = await loadFixture(deployUserManagementFixture);
      
      await userManagement.connect(doctor).registerDoctor(
        "Dr. John", "Smith", "Cardiologist", 10, "Heart Clinic", "License123", "CertHash"
      );

      await expect(userManagement.connect(doctor).registerDoctor(
        "Dr. John", "Smith", "Cardiologist", 10, "Heart Clinic", "License123", "CertHash"
      )).to.be.revertedWithCustomError(userManagement, "AlreadyRegistered");
    });

    it("Should revert if the address is zero", async function () {
      const { userManagement, AddressZero } = await loadFixture(deployUserManagementFixture);
      
      await expect(userManagement.getRole(AddressZero)).to.be.revertedWithCustomError(userManagement, "AddressZeroDetected");
    });

    it("Should revert if trying to register with a role already assigned", async function () {
      const { userManagement, doctor } = await loadFixture(deployUserManagementFixture);
      
      await userManagement.connect(doctor).registerDoctor(
        "Dr. John", "Smith", "Cardiologist", 10, "Heart Clinic", "License123", "CertHash"
      );
      
      await expect(userManagement.connect(doctor).registerPatient("John", "Doe", "01/01/1980", "Healthy"))
        .to.be.revertedWithCustomError(userManagement, "AlreadyHasRole");
    });
  });

  describe("Verification", function () {
    it("Should allow the owner to verify a doctor", async function () {
      const { userManagement, doctor, owner } = await loadFixture(deployUserManagementFixture);
      
      await userManagement.connect(doctor).registerDoctor(
        "Dr. John", "Smith", "Cardiologist", 10, "Heart Clinic", "License123", "CertHash"
      );

      await userManagement.connect(owner).verifyUser(doctor.address, 3);
      expect(await userManagement.isDoctorVerified(doctor.address)).to.be.true;
    });

    it("Should revert if non-owner tries to verify", async function () {
      const { userManagement, doctor, otherAccount } = await loadFixture(deployUserManagementFixture);
      
      await userManagement.connect(doctor).registerDoctor(
        "Dr. John", "Smith", "Cardiologist", 10, "Heart Clinic", "License123", "CertHash"
      );

      await expect(userManagement.connect(otherAccount).verifyUser(doctor.address, 3))
        .to.be.revertedWith("Ownable: caller is not the owner");
    });
  });
});
