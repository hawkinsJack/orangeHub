import React from 'react';
import Profile from '../Profile/Profile';
import { profiles } from './ProfilesData'

const ProfileList = ({ listTitle }) => {


    return (


        <div>

            <h2>{listTitle ? listTitle : 'Cohort Profiles'}</h2>

            <div>
                {
                    profiles && profiles.map((profile) => (
                        <Profile name={profile.name} location={profile.location} role={profile.role} bio={profile.bio}/>
                    ))
                }
            </div>



        </div>


    )
};

export default ProfileList;
