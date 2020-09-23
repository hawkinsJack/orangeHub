import React, { useState, useEffect, useCallback } from 'react';
import Profile from '../Profile/Profile';


const ProfileList = ({ listTitle, profiles }) => {

    const [filteredProfiles, setFilteredProfiles] = useState([])

    const [search, setSearch] = useState('')

    const Locations = ["All", "Aalborg", "Amsterdam", "London", "Oxford"]
    const [location, setLocation] = useState('All')

    const Roles = ["All", "DevOps", "Software Engineer", "UX Engineer"];
    const [role, setRole] = useState('All');

    const Years = ["All", "2019", "2020"];
    const [year, setYear] = useState('All')

    useEffect(() => {
        if (!profiles || profiles.length === 0) {
            return
        }
        setFilteredProfiles(profiles)
    }, [profiles]);


    const filterProfilesByLocationAndRoleAndYear = useCallback(() => {

        const profileFilter = {
            location, 
            role, 
            joined: year
        };

        if (location === 'All' && role === 'All' && year === 'All') {
            setFilteredProfiles(profiles)
            return
        } 

        const fp = profiles.filter((profile) => {

            for(const key in profileFilter){

                if(profileFilter[key] !== profile[key]){
                    return false
                }

                return true;
            }
        });

        console.log(fp)

    



    //     let filtered
    //     if (location === 'All' && role === 'All' && year === 'All') {
    //         setFilteredProfiles(profiles)
    //     return
    //     } else if (role === 'All' && location !== 'All' && year === 'All') {
    //         filtered = profiles.filter(profile => (profile.location === location))
    //     } else if (location === 'All' && role !== 'All' && year === 'All') {
    //         filtered = profiles.filter(profile => (profile.role === role))
    //     } else if (location === 'All' && role === 'All' && year !== 'All') {
    //         filtered = profiles.filter(profile => (profile.joined === year))
    //     } else if (location !== 'All' && role !== 'All' && year !== 'All') {
    //         filtered = profiles.filter(profile => (profile.role === role && profile.location === location && profile.joined === year))
    //     } else {
    //         setFilteredProfiles(profiles)
    //         return
    //     }
    //     setFilteredProfiles(filtered)
        
    }, [profiles, location, role, year])
    
    useEffect(() => {

        filterProfilesByLocationAndRoleAndYear()

    }, [filterProfilesByLocationAndRoleAndYear])

    const handleUserInput = (event) => {
        setSearch(event.target.value)
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value)
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value)
    };

    const handleYearChange = (event) => {
        setYear(event.target.value)
    };

    const lowerCaseAndRemoveWhitespace = (str) => {
        return str.toLowerCase().replace(/\s+/g, '');
    }


    return (
        <div className="container">
            <img src="/elsevierlogo.png" class="img-fluid mb-5 px-5" alt="Elsevier Logo"></img>
            <hr style={{ width: '75%', textAlign: 'center', }}></hr>
            <h2>{listTitle ? listTitle : 'Cohort Profiles'}</h2>
            <input type="text" name="searchName" value={search} onChange={(e) => handleUserInput(e)} />
            <select value={location} onChange={(e) => handleLocationChange(e)}>
                {
                    Locations.map(location => (

                        <option value={location}>{location}</option>))
                }

            </select>
            <select value={role} onChange={(e) => handleRoleChange(e)} >
                {
                    Roles.map((r) => (

                        <option value={r}>{r}</option>
                    ))
                }



            </select>

            <select value={year} onChange={(e) => handleYearChange(e)} >
                {
                    Years.map((y) => (

                        <option value={y}>{y}</option>
                    ))
                }



            </select>
            <div class="container">
                <div class="row">
                    {
                        filteredProfiles &&
                        filteredProfiles.length !== 0 &&
                        filteredProfiles.filter((profile) => (lowerCaseAndRemoveWhitespace(profile.name).includes(lowerCaseAndRemoveWhitespace(search)))).map((profile) => (
                            <div class="col-md-6 col-lg-4">
                                <Profile name={profile.name} location={profile.location} role={profile.role} bio={profile.bio} joined={profile.joined} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default ProfileList;
