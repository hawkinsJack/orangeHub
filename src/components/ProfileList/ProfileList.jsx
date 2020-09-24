import React, { useState, useEffect, useCallback } from 'react';
import Profile from '../Profile/Profile';

const ProfileList = ({ listTitle, profiles }) => {

    const [filteredProfiles, setFilteredProfiles] = useState(profiles)

    const [search, setSearch] = useState('')

    const Locations = ["Aalborg", "Amsterdam", "London", "Oxford"]
    const [location, setLocation] = useState('')

    const Roles = ["DevOps", "Software Engineer", "UX Engineer"];
    const [role, setRole] = useState('');

    const Years = ["2019", "2020"];
    const [year, setYear] = useState('')

    

    useEffect(() => {
        if (!profiles || profiles.length === 0) {
            return
        }
        setFilteredProfiles(profiles)
    }, [profiles]);

    const filterProfilesByLocationAndRoleAndYear = useCallback(() => {

        const filterProfiles = (option, selector, profile) => {
            return (option ? ((profile[selector] === option) ? true : false) : undefined)
        }
        
        const sortedProfiles = (profiles.filter((p) => {

            const l = filterProfiles(location, 'location', p)
            const r = filterProfiles(role, 'role', p)
            const y = filterProfiles(year, 'year', p)


            if ((l === true || l === undefined) && (r === true || r === undefined) && (y === true || y === undefined)) {
                return true
            }

            return false

        }));

        setFilteredProfiles(sortedProfiles)

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
            <img src="/elsevierlogo.png" class="img-fluid mb-5 px-5" alt="Elsevier Logo" />
            <hr style={{ width: '75%', textAlign: 'center', }} />
            <h2>{listTitle ? listTitle : 'Cohort Profiles'}</h2>
            <input type="text" name="searchName" value={search} onChange={(e) => handleUserInput(e)} />
            <select value={location} onChange={(e) => handleLocationChange(e)}>
                <option value=''>All</option>
                {
                    Locations.map(location => (

                        <option value={location}>{location}</option>))
                }
            </select>
            <select value={role} onChange={(e) => handleRoleChange(e)} >
                <option value=''>All</option>
                {
                    Roles.map((r) => (

                        <option value={r}>{r}</option>
                    ))
                }
            </select>
            <select value={year} onChange={(e) => handleYearChange(e)}>
                <option value=''>All</option>
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
                                <Profile name={profile.name} location={profile.location} role={profile.role} bio={profile.bio} year={profile.year} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default ProfileList;
