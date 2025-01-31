// pages/index.js
import React, { useState } from 'react';
import ConnectButton from '../components/ConnectButton'; // Import du bouton de connexion
import Buttons from '../components/Buttons'; // Import des autres boutons

const Home = () => {
  const [account, setAccount] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Fonction pour gérer la connexion au wallet
  const handleConnect = (connectedAccount) => {
    setAccount(connectedAccount);
    setIsWalletConnected(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>🚀 Bienvenue sur StakeNclic!</h1>
      
      {/* Affichage du bouton de connexion */}
      <ConnectButton onConnect={handleConnect} />

      {isWalletConnected ? (
        <div>
          <p style={{ marginTop: '20px' }}>Compte connecté : {account.slice(0, 6)}...{account.slice(-4)}</p>

          {/* Affichage des autres boutons lorsque le wallet est connecté */}
          <div className="buttons-container" style={{ marginTop: '30px' }}>
            <button className="button stake-button" disabled={false} onClick={() => console.log('Stake clicked')}>
              Stake
            </button>
            <button className="button claim-button" disabled={false} onClick={() => console.log('Claim clicked')}>
              Claim
            </button>
            <button className="button clic-button" disabled={false} onClick={() => console.log('Clic clicked')}>
              Clic
            </button>
          </div>
        </div>
      ) : (
        <p style={{ marginTop: '20px' }}>Veuillez connecter votre wallet pour commencer.</p>
      )}
    </div>
  );
};

export default Home;

