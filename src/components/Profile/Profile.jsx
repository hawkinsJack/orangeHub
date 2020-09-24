import React, { useState } from 'react'

const Profile = ({ name, location, role, bio, year }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="card w-auto mx-2 my-2">
            <div className="card-body">
                <h3 className="profile-name card-title">{name}</h3>
                <h4 className="profile-location card-subtitle mb-2 text-muted">{location}</h4>
                <h4 className="profile-role">{role}</h4>
                <h4 className="profile-role">{year}</h4>
                <button onClick={handleOpen} type="button" class="btn btn-warning">{!open ? 'Expand for Bio' : 'Close Bio'}</button>
                {open && <p className="profile-bio pt-3">{bio ? bio : "No Bio Available"}</p>}
            </div>
        </div>
    )
};

export default Profile;
