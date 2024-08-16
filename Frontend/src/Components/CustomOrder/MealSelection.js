import React from 'react';
import './MealSelection.css';

const MealSelection = ({ meal, items, selected, onSelect, error }) => {
  return (
    <div className="selection-card">
      <h3>{meal}</h3>
      <div className="options">
        {items.map((item) => (
          <button
            key={item}
            className={`option-btn ${selected === item ? 'selected' : ''}`}
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {error && <span className="error01">{error}</span>}
    </div>
  );
};

export default MealSelection;
