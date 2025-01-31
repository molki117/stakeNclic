// components/Buttons.js
import React from 'react';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <button className="button stake-button" disabled>
        Stake
      </button>
      <button className="button claim-button" disabled>
        Claim
      </button>
      <button className="button clic-button" disabled>
        Clic
      </button>
    </div>
  );
};

export default Buttons;
