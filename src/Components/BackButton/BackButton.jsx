import React from 'react';
import BackIcon from 'Assets/back_icon.png';
import styles from './BackButton.module.scss';

function BackButton({ onBackClick }) {
  return (
    <button type="button" className={styles.buttonCircular}>
      <img className={styles.buttonCircular__label} src={BackIcon} alt="Click to go back" />
    </button>
  );
}

export default BackButton;
