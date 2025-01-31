import { useState } from "react";
import { ethers } from "ethers";

export default function ConnectButton({ setIsWalletConnected, setAccount }) {
  // Etat local pour gérer le compte connecté
  const [account, setLocalAccount] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        // Initialisation de l'objet provider
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);

        // Mise à jour du compte et de l'état de la connexion
        setLocalAccount(accounts[0]);
        setAccount(accounts[0]); // Passe l'adresse au parent (Home)
        setIsWalletConnected(true); // Indique que le wallet est connecté
      } catch (error) {
        console.error("Connexion échouée", error);
        alert("Erreur de connexion au wallet !");
      }
    } else {
      alert("Veuillez installer MetaMask ou RabbyWallet !");
    }
  }

  return (
    <button
      onClick={connectWallet}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {account ? `Connecté: ${account.slice(0, 6)}...` : "Se connecter"}
    </button>
  );
}
