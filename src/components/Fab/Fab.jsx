import React from 'react';
import './Fab.scss';

function Fab({
  title,
  onClick,
  loading,
}) {

  return (
    <button
      type="button"
      onClick={onClick}
      className="fab__button"
    >
      {title}
    </button>
  )
}

export default Fab;
