import React, { useState } from 'react'

const Profile = ({ name, location, role, bio }) => {
    const [open, setOpen] = useState(true)
    const handleOpen = () => {
        console.log(bio)
        setOpen(!open)
    }

    return (
        <div className="card w-50">
            <div className="card-body">
                <h3 className="profile-name card-title">{name}</h3>

                <h4 className="profile-location card-subtitle mb-2 text-muted">{location}</h4>

                <h4 className="profile-role">{role}</h4>
                <button onClick={handleOpen}>Bio</button>
                {open && <p className="profile-bio">{bio}</p>}
            </div>
        </div>
    )
};

export default Profile;
