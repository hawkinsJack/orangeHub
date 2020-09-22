import React from 'react';
import './App.css';
import {rawData} from './components/ProfileList/ProfilesData'
import ProfileList from './components/ProfileList/ProfileList';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Orange Hub</h2>
      </header>
      <main>
        <ProfileList listTitle='Cohort List' profiles={rawData}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
