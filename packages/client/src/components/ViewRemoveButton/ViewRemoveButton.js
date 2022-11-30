import React, { useState } from 'react';
import './ViewRemoveButton.css';

export default function ViewRemoveButton() {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="main-div">
      <div className="view-remove-button">
        {visible && (
          <button type="button" onClick={removeElement}>
            Remove
          </button>
        )}
      </div>
      <div className="view-remove-button">
        {visible && (
          <button type="button" onClick={removeElement}>
            Remove
          </button>
        )}
      </div>
      <div className="view-remove-button">
        {visible && (
          <button type="button" onClick={removeElement}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
