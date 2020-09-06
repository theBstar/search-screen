import React from 'react';
import './Fab.scss';

function Fab({
  title,
  onClick,
  loading,
}) {

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="fab__button"
      >
        {title}
      <div className="fab__overlay" />
      </button>
    </>
  )
}

export default Fab;
