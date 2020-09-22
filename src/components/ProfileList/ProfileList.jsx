import React from 'react';
import Profile from '../Profile/Profile';
import { profiles } from './ProfilesData'

const ProfileList = ({ listTitle }) => {

    return (
        <div className="container">
            <img src="/elsevierlogo.png" class="img-fluid mb-5 px-5" alt="Elsevier Logo"></img>
            <hr style={{ width: '75%', textAlign: 'center', }}></hr>
            <h2>{listTitle ? listTitle : 'Cohort Profiles'}</h2>
            <div class="container">
                <div class="row">
                    {
                        profiles && profiles.map((profile) => {
                            return (
                                <div class="col-md-6 col-lg-4">
                                    <Profile name={profile.name} location={profile.location} role={profile.role} bio={profile.bio} />
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>


        </div>


    )
};

export default ProfileList;
