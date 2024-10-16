import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { lisk, liskSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "PharmaX",
  projectId: "53254d53b6eb744328cd68c4b4e096cc",
  chains: [lisk, liskSepolia],
  ssr: true,
});
