import ConnectButton from "../components/ConnectButton";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🚀 StakeNclic</h1>
      <p>Connecte ton wallet pour commencer</p>
      <ConnectButton />
    </div>
  );
}
