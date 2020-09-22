import React, { useEffect, useState } from 'react';
import './App.css';
import ProfileList from './components/ProfileList/ProfileList';
import { getProfiles } from './GetProfiles';

function App() {

  const [profiles, setProfiles] = useState([])

  useEffect( () => {
    const sortProfiles = async () => {
      const data = await getProfiles()
      setProfiles(data)
    }
    sortProfiles()
  }, [])

  return (
    <div className="App">
      <header className="header">
        <h2 className="header-text">Orange Hub</h2>
      </header>
      <main>
        <ProfileList listTitle='Tech Associates' profiles={profiles}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
