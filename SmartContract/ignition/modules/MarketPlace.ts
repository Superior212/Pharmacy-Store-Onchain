// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MarketModule = buildModule("MarketModule", (m) => {
  const marketplace = m.contract("Marketplace");

  return { marketplace };
});

export default MarketModule;
