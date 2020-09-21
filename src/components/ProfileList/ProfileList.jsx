import React from 'react';

import Profile from '../Profile/Profile';

const ProfileList = ({ listTitle }) => {


    const profiles = [

        
        {
            id: 1,
            name: 'Jack',
            bio: 'Bio',
            location: 'London',
            role: 'engineer'
        },
        {
            id: 2,
            name: 'Jack',
            bio: 'Bio',
            location: 'London',
            role: 'engineer'
        },
        {
            id: 3,
            name: 'Jack',
            bio: 'Bio',
            location: 'London',
            role: 'engineer'
        }
    ];



    return (


        <div>

            <h2>{listTitle ? listTitle : 'Cohort Profiles'}</h2>

            <div>
                <Profile name="name" location="location" role="role" bio="bio"/>
                <Profile name="name 2" location="location 2" role="role 2" bio="bio 2"/>
                <Profile name="name 3" location="location 3" role="role 3" bio="bio 3"/>
            </div>



        </div>


    )
};

export default ProfileList;
