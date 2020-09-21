import React from 'react'

const Profile = ({ name, location, role, bio }) => {

    return (
        <div>
            <div>
                <h3 className="profile-name">{name}</h3>
            </div>
            <div>
                <h4 className="profile-location">{location}</h4>
            </div>
            <div>
                <h4 className="profile-role">{role}</h4>
            </div>
            <div>
                <p className="profile-bio">{bio}</p>
            </div>
        </div>
    )
};

export default Profile;
