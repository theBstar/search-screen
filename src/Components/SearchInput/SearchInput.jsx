import React from 'react';
import styles from './SearchInput.module.scss';

function SearchInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="searchInput" className={styles.srOnlyLabel}>
        Enter text to search for doctors
      </label>
      <input
        id="searchInput"
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="username"
      />
      <div className={styles.startEndorment}>
        @dr.
      </div>
    </div>
  );
}

export default SearchInput;

