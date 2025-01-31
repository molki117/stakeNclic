// components/Buttons.js
import React from 'react';

const Buttons = ({ handleAction }) => {
  return (
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
  );
};

export default Buttons;
