import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, goerli, sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

// Configuration des blockchains
const { chains, publicClient } = configureChains(
  [goerli, sepolia],
  [publicProvider()]
);

// Configuration des wallets
const { connectors } = getDefaultWallets({
  appName: "StakeNclic",
  projectId: "project_id", 
  chains,
});

// Configuration générale Wagmi
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
