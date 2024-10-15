// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PrescriptionModule = buildModule("PrescriptionModule", (m) => {
  const prescription = m.contract("PrescriptionManagement");

  return { prescription };
});

export default PrescriptionModule;
