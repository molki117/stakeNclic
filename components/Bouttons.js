// components/Buttons.js
import React, { useState } from 'react';

const Buttons = ({ isWalletConnected }) => {
  return (
    <div className="buttons-container">
      <button className="button stake-button" disabled={!isWalletConnected}>
        Stake
      </button>
      <button className="button claim-button" disabled={!isWalletConnected}>
        Claim
      </button>
      <button className="button clic-button" disabled={!isWalletConnected}>
        Clic
      </button>
    </div>
  );
};

export default Buttons;
