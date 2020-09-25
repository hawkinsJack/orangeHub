import React, { useEffect, useState } from 'react';
import './App.css';
import AdminLogin from './components/AdminLogin/AdminLogin';
import ProfileList from './components/ProfileList/ProfileList';
import { getProfiles } from './GetProfiles';
import LoginAdmin from './services/LoginAdmin';
import CreateProfile from './services/CreateProfile';
import NewProfileForm from './components/NewProfile/NewProfileForm';
import ConfirmLogout from './components/HandleLogout/ConfirmLogout';

import Navbar from './components/Navbar/Navbar';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {

  const [profiles, setProfiles] = useState([]);
  const [roles, setRoles] = useState([]);
  const [locations, setLocations] = useState([]);
  const [years, setYears] = useState([]);

  const [successMessageOpen, setSucccessMessageOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('Logged in as Admin!')
  const [failMessage, setFailMessage] = useState(false);

  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showNewUserForm, setShowNewUserForm] = useState(false);

  const [logoutOpen, setLogoutOpen] = useState(false);




  useEffect(() => {
    const sortProfiles = async () => {
      const data = await getProfiles()
      setProfiles(data.profiles)
      setRoles(data.roles)
      setLocations(data.locations)
      setYears(data.years)
    }
    sortProfiles()
  }, []);

  useEffect(() => {
    
    if(!successMessageOpen){
      return;
    }

    setTimeout(() => {
      setSucccessMessageOpen(false)
    }, [4000])

  }, [successMessageOpen])

  const loginAdmin = async ({ email, password }) => {

    const admin = await LoginAdmin({ email, password })

    if(admin.fail){
      setFailMessage(admin.message)
      return;
    }

    setCurrentAdmin(admin)
    setShowAdminLogin(false)
    setSucccessMessageOpen(true)
    setSuccessMessage('Successfully Logged in as Admin!')

  };

  const handleLogout = () => {
    setLogoutOpen(false)
    setCurrentAdmin('')
    setSucccessMessageOpen(true)
    setSuccessMessage('Successfully Logged out!')
  }

  const addUser = async (user) => {

    const newProfile = await CreateProfile(user);

    setProfiles([newProfile, ...profiles])

    setShowNewUserForm(false)
    setSucccessMessageOpen(true)
    setSuccessMessage('Successfully created associated profile!')
  };

  const handleNewUserFormOpen = () => {
    setShowNewUserForm(true)
  }

  const handleLoginOpen = () => {
    setShowAdminLogin(true)
  }

  const handleLoginClose = () => {
    setShowAdminLogin(false)
  }

  const handleNewProfileFormClose = () => {
    setShowNewUserForm(false)
  }

  const handleConfirmLogoutOpen = () => {
    setLogoutOpen(true)
  }

  const closeConfirmLogout = () => {
    setLogoutOpen(false)
  }

  return (
    <div className="App">
      <header className="header">
        <Navbar 
        currentAdmin={currentAdmin} 
        handleNewUserFormOpen={handleNewUserFormOpen} 
        handleLoginOpen={handleLoginOpen}
        handleConfirmLogoutOpen={handleConfirmLogoutOpen}/>
      </header>
      <main>
  
        <AdminLogin 
        loginAdmin={loginAdmin} 
        open={showAdminLogin} 
        handleClose={handleLoginClose}
        failMessage={failMessage}/>

        <NewProfileForm 
        addUser={addUser} 
        open={showNewUserForm} 
        handleClose={handleNewProfileFormClose} 
        roles={roles} 
        locations={locations} 
        years={years} />

        <ConfirmLogout 
        logoutOpen={logoutOpen}
        handleLogout={handleLogout}
        closeConfirmLogout={closeConfirmLogout}/>

        <ProfileList listTitle='Tech Associates' profiles={profiles} />
        <Snackbar open={successMessageOpen} autoHideDuration={6000}>
          <Alert severity="success">
            {successMessage}
          </Alert>
        </Snackbar>
  
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
