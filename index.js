import { useState } from 'react';
import ConnectButton from '../components/ConnectButton';
import Buttons from '../components/Buttons';

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = async () => {
    // Logique de connexion du wallet ici...
    setIsWalletConnected(true); // Met à jour l'état du wallet connecté
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🚀 StakeNclic</h1>
      <p>Connect your wallet</p>

      <ConnectButton connectWallet={connectWallet} />

      {/* Passe l'état du wallet connecté aux boutons */}
      <Buttons isWalletConnected={isWalletConnected} />
    </div>
  );
}
