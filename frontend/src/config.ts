import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  base,
  lisk,
  liskSepolia,
  sepolia
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'PharmX',
  projectId: '69d9220b2a026845ee35aa00f6c4f928',
  chains: [
lisk,
liskSepolia,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
