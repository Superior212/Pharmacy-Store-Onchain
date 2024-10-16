// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const UserManagementAddress = "0x34B5D26FC98f4da8eD68b07F07BEcf3BEA16a9E0";
const PrescriptionModule = buildModule("PrescriptionModule", (m) => {
  const prescription = m.contract("PrescriptionManagement", [
    UserManagementAddress,
  ]);

  return { prescription };
});

export default PrescriptionModule;
