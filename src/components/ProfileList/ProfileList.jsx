import React, { useState, useEffect } from 'react';
import Profile from '../Profile/Profile';


const ProfileList = ({ listTitle, profiles }) => {
    const [filteredProfiles, setFilteredProfiles] = useState([])
    const [search, setSearch] = useState('')
    const Locations = ["All", "Aalborg", "Amsterdam", "London", "Oxford"]
    const [location, setLocation] = useState('All')
    // const Roles = ["All", "DevOps", "Network Engineer", "Software Engineer", "UX Engineer"]
    // const [role, setRole] = useState('All')

    useEffect(() => {
        if (!profiles || profiles.length === 0) {
            return
        }
        setFilteredProfiles(profiles)
    }, [profiles])
    useEffect(() => {
        if (location === "All") {
            setFilteredProfiles(profiles)
            return
        }
        console.log(location)
        const filtered = profiles.filter(profile => (profile.location === location))
        console.log(filtered)
        setFilteredProfiles(filtered)
    }, [profiles, location])

    const handleUserInput = (event) => {
        console.log(event.target.value)
        console.log(event.target)
        setSearch((event.target.value).toLowerCase())
    }
    const handleLocationChange = (event) => {

        setLocation(event.target.value)
    }
    return (
        <div className="container">
            <img src="/elsevierlogo.png" class="img-fluid mb-5 px-5" alt="Elsevier Logo"/>
            <hr style={{ width: '75%', textAlign: 'center', }}/>
            <h2>{listTitle ? listTitle : 'Cohort Profiles'}</h2>
            
            
            <div class="form-row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Search" name="searchName" value={search} onChange={(e) => handleUserInput(e)} />
                </div>


                <div>
                    <label for="inputLocation">Location:</label>
                    <input type="text" class="form-control" id="inputLocation"/>
                </div>

                <div class="col">
                    <select class="form-control" value={location} onChange={(e) => handleLocationChange(e)}>
                        {
                            Locations.map(location => (

                                <option value={location}>{location}</option>))
                        }

                    </select>
                </div>
            </div>


            <div class="container">
                <div class="row">
                    {
                        filteredProfiles &&
                        filteredProfiles.length !== 0 &&

                        filteredProfiles.filter((profile) => (profile.name.toLowerCase().replace(/\s+/g, '').includes(search.replace(/\s+/g, '')))).map((profile) => (
                            <div class="col-md-6 col-lg-4">
                                <Profile name={profile.name} location={profile.location} role={profile.role} bio={profile.bio} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default ProfileList;
