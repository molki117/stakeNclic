// pages/index.js
import React from 'react';
import Buttons from '../components/Buttons';  // Importer les boutons

const Home = () => {
  return (
    <div className="home-page">
      <h1>Bienvenue sur StakeNclic!</h1>
      <Buttons />  {/* Afficher les boutons */}
    </div>
  );
};

export default Home;
