// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const UserManagementAddress = "0x798AA46f2caBdd946e0b0E7192dD973b276B8fAC";
const PrescriptionModule = buildModule("PrescriptionModule", (m) => {
  const prescription = m.contract("PrescriptionManagement", [
    UserManagementAddress,
  ]);

  return { prescription };
});

export default PrescriptionModule;
