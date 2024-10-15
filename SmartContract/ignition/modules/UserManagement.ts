// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UserModule = buildModule("UserModule", (m) => {
  const User = m.contract("UserManagement");

  return { User };
});

export default UserModule;
