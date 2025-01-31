// components/ConnectButton.js
import React, { useState } from 'react';
import { ethers } from 'ethers';

const ConnectButton = ({ onConnect }) => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        setAccount(accounts[0]);
        onConnect(accounts[0]); // Remonte le compte connecté à la page principale
      } catch (error) {
        console.error('Connexion échouée', error);
      }
    } else {
      alert('Veuillez installer MetaMask ou RabbyWallet !');
    }
  };

  return (
    <button onClick={connectWallet} style={{ padding: '10px 20px', fontSize: '16px' }}>
      {account ? `Connecté: ${account.slice(0, 6)}...` : 'Se connecter'}
    </button>
  );
};

export default ConnectButton;
