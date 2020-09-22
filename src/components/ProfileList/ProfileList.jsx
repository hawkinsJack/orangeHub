import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import { profiles } from './ProfilesData'

const ProfileList = ({ listTitle }) => {
const [search, setSearch] = useState('')
const [location, setLocation] = useState('All')

const handleUserInput = (event) => {
    console.log(event.target.value)
    console.log(event.target)
    setSearch((event.target.value).toLowerCase())
}

    return (
        <div>
            <h2>{listTitle ? listTitle : 'Cohort Profiles'}</h2>
            <input type="text" name="searchName" value={search} onChange={(e) => handleUserInput(e)} />
            <select>
                <option value="All">All</option>
                <option value="London">London</option>
            </select>
            <div>
                {
                    profiles && profiles.filter((profile) => (profile.name.toLowerCase().replace(/\s+/g, '').includes(search.replace(/\s+/g, '')))).map((profile) => (
                        <Profile name={profile.name} location={profile.location} role={profile.role} bio={profile.bio}/>
                    ))
                }
            </div>
        </div>
    )
};

export default ProfileList;
