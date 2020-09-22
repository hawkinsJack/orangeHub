import React, { useState } from 'react'

const Profile = ({ name, location, role, bio }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="card w-auto mx-5 my-5 ">
            <div className="card-body">
                <h3 className="profile-name card-title">{name}</h3>

                <h4 className="profile-location card-subtitle mb-2 text-muted">{location}</h4>

                <h4 className="profile-role">{role}</h4>

                <button onClick={handleOpen} type="button" class="btn btn-warning">Expand for Bio</button>

                {open && <p className="profile-bio">{bio}</p>}
            </div>
        </div>
    )
};

export default Profile;
