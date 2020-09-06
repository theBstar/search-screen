import React from 'react';
import SearchDoctor from 'Screens/SearchDoctor';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <SearchDoctor />
    </div>
  );
}

export default App;
