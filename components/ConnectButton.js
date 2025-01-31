import { useState } from "react";
import { ethers } from "ethers";

export default function ConnectButton() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Connexion échouée", error);
      }
    } else {
      alert("Veuillez installer MetaMask ou RabbyWallet !");
    }
  }

  return (
    <button onClick={connectWallet} style={{ padding: "10px 20px", fontSize: "16px" }}>
      {account ? `Connecté: ${account.slice(0, 6)}...` : "Se connecter"}
    </button>
  );
}
