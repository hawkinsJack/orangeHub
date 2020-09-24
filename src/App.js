import React, { useEffect, useState } from 'react';
import './App.css';
import AdminLogin from './components/AdminLogin/AdminLogin';
import ProfileList from './components/ProfileList/ProfileList';
import { getProfiles } from './GetProfiles';
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import LoginAdmin from './services/LoginAdmin';
import CreateProfile from './services/CreateProfile';
import NewProfileForm from './components/NewProfile/NewProfileForm';

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

    setCurrentAdmin(admin)
    setShowAdminLogin(false)
    setSucccessMessageOpen(true)
    setSuccessMessage('Successfully Logged in as Admin')

  };

  const addUser = async (user) => {

    const newProfile = await CreateProfile(user);

    setProfiles([newProfile, ...profiles])

    setShowNewUserForm(false)
    setSucccessMessageOpen(true)
    setSuccessMessage('Successfully created associated profile!')
  };

  const handleLoginOpen = () => {
    setShowAdminLogin(true)
  }

  const handleLoginClose = () => {
    setShowAdminLogin(false)
  }

  const handleNewProfileFormClose = () => {
    setShowNewUserForm(false)
  }

  return (
    <div className="App">
      <header className="header">
        <Navbar />
        {/* <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div style={{
            flex: '1'
          }}>
            <h2 className="header-text">OrangeHub</h2>
          </div>
          {
            currentAdmin &&
            <div style={{
              flex: '0 0 30%',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              paddingRight: '1rem'
            }}>
                <div>
                  <span>Currently logged in as: {currentAdmin.name}</span>
                </div>
              <div onClick={() => setShowNewUserForm(!showNewUserForm)}>
                <AiOutlineUserAdd color="white" size='2rem'/>
                <p>Create New Profile</p>
              </div>
              <div onClick={() => setCurrentAdmin('')}>
                <IoIosLogOut color="white" size='2rem'/>
                <p>Log Out</p>
              </div> 
            </div>
          }
          {
            !currentAdmin &&
            <div 
            style={{
              flex: '0 0 20%',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              paddingRight: '1rem'
            }}
            onClick={() => handleLoginOpen()}>
              <IoIosLogIn color="white" size='2rem'/>
              <p>Log In</p>
            </div>
          }
        </div> */}
      </header>
      <main>
  
        <AdminLogin loginAdmin={loginAdmin} open={showAdminLogin} handleClose={handleLoginClose}/>
        <NewProfileForm addUser={addUser} open={showNewUserForm} handleClose={handleNewProfileFormClose} roles={roles} locations={locations} years={years} />
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
