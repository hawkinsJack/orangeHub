import React from 'react';
import './App.css';

import ProfileList from './components/ProfileList/ProfileList';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Orange Hub</h2>
      </header>
      <main>
        <ProfileList listTitle='Cohort List'/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
