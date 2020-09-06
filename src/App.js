import React from 'react';
import SearchDoctor from './screens/SearchDoctor';
import './App.scss';

// this application has only one screen
// app just renders the search screen

function App() {
  return (
    <div className="app">
      <SearchDoctor />
    </div>
  );
}

export default App;
