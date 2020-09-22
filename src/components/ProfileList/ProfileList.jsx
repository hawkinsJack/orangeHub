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
        const filtered = profiles.filter(profile => (profile.Location === location))
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
        <div>
            <h2>{listTitle ? listTitle : 'Cohort Profiles'}</h2>
            <input type="text" name="searchName" value={search} onChange={(e) => handleUserInput(e)} />
            <select value={location} onChange={(e) => handleLocationChange(e)}>
                {
                    Locations.map(location => (

                        <option value={location}>{location}</option>))

                }


            </select>
            <div>
                {
                    filteredProfiles &&
                    filteredProfiles.length !== 0 &&
                    filteredProfiles.filter((profile) => (profile.name.toLowerCase().replace(/\s+/g, '').includes(search.replace(/\s+/g, '')))).map((profile) => (
                        <Profile name={profile.name} location={profile.location} role={profile.role} bio={profile.bio} />
                    ))
                }
            </div>
        </div>
    )
};

export default ProfileList;
