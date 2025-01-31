import { useState } from 'react';
import { ethers } from 'ethers';

const Home = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);

  // Fonction pour connecter le wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        setIsWalletConnected(true);
      } catch (error) {
        console.error("Erreur de connexion au wallet", error);
      }
    } else {
      alert("Veuillez installer MetaMask ou Rabby Wallet !");
    }
  };

  // Simuler l'action de staking, claim et clic
  const handleAction = (action) => {
    console.log(`${action} action triggered!`);
    // Remplace par la logique blockchain réelle
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bienvenue sur StakeNclic!</h1>

      {/* Bouton de connexion du wallet en haut à droite */}
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <button onClick={connectWallet} style={{ padding: '10px 20px', fontSize: '16px' }}>
          {isWalletConnected ? `Connecté: ${account.slice(0, 6)}...` : 'Se connecter'}
        </button>
      </div>

      {/* Boutons Stake, Claim, Clic */}
      {isWalletConnected && (
        <div className="buttons-container" style={{ marginTop: '50px' }}>
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
};

export default Home;
