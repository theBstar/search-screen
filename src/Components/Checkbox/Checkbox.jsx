import React from 'react';
import './Checkbox.scss';

function Checkbox({ value, onClick }) {
  return (
    <div className="check--circular">
      <label className="container">
        <input type="checkbox" value={value} onClick={onClick} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default Checkbox;