import React from 'react';
import './App.css';

import ProfileList from './components/ProfileList/ProfileList';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2 className="header-text">Orange Hub</h2>
      </header>
      <main>
        <ProfileList listTitle='Tech Associates' />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
