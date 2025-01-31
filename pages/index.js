import { useState } from 'react';
import ConnectButton from "../components/ConnectButton";

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);

  // Fonction pour connecter le wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsWalletConnected(true);
      } catch (err) {
        console.error("Error connecting wallet:", err);
      }
    } else {
      alert("Please install MetaMask or Rabby wallet.");
    }
  };

  // Simuler l'action de staking, claim et clic
  const handleAction = (action) => {
    console.log(`${action} action triggered!`);
    // Remplace par la logique blockchain réelle
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🚀 Stake'N'clic</h1>
      <p>Connect your wallet</p>
      
      {/* Wallet Connect Button */}
      <ConnectButton connectWallet={connectWallet} isWalletConnected={isWalletConnected} account={account} />

      {/* Action Buttons */}
      {isWalletConnected && (
        <div className="buttons-container">
          <button onClick={() => handleAction('Stake')} className="button stake-button">
            Stake
          </button>
          <button onClick={() => handleAction('Claim')} className="button claim-button">
            Claim
          </button>
          <button onClick={() => handleAction('Clic')} className="button clic-button">
            Clic
          </button>
        </div>
      )}
    </div>
  );
}

