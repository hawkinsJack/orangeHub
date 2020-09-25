import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const NewProfileForm = ({ addUser, roles, locations, years, open, handleClose }) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [location, setLocation] = useState('');
    const [year, setYear] = useState('');
    const [bio, setBio] = useState('');


    return (

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create new Associate Profile</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    addUser({
                        name,
                        role,
                        location,
                        year,
                        bio
                    })
                }}>
                    <TextField
                        autoFocus
                        required={true}
                        margin="dense"
                        id="outlined-basic"
                        variant="outlined"
                        label="Enter Associate Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        autoFocus
                        required={true}
                        margin="dense"
                        id="outlined-basic"
                        variant="outlined"
                        label="Select Role"
                        select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        fullWidth>
                        <MenuItem value="">Select Associate Role</MenuItem>
                        {
                            roles && roles.map(role => (
                                <MenuItem key={role.id} value={role.name}>{role.name}</MenuItem>
                            ))
                        }

                    </TextField>
                    <TextField
                        autoFocus
                        required={true}
                        margin="dense"
                        id="outlined-basic"
                        variant="outlined"
                        label="Select Location"
                        select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        fullWidth>
                        <MenuItem value="">Select Associate location</MenuItem>
                        {
                            locations && locations.map(location => (
                                <MenuItem key={location.id} value={location.name}>{location.name}</MenuItem>
                            ))
                        }

                    </TextField>
                    <TextField
                        autoFocus
                        required={true}
                        margin="dense"
                        id="outlined-basic"
                        variant="outlined"
                        label="Select Year"
                        select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        fullWidth>
                        <MenuItem value="">Select Associate Year</MenuItem>
                        {
                            years && years.map(year => (
                                <MenuItem key={year.id} value={year.name}>{year.name}</MenuItem>
                            ))
                        }

                    </TextField>
                    <TextField
                        autoFocus
                        required={true}
                        margin="dense"
                        id="outlined-basic"
                        variant="outlined"
                        label="Enter Bio"
                        type="text"
                        multiline
                        rows={5}
                        onChange={(e) => setBio(e.target.value)}
                        fullWidth
                    />
                    
                    <button 
                    className="btn bg-light"
                    onClick={() => handleClose()}>
                        Close
                   </button>
                   <button 
                   className="btn bg-light"
                   type="submit">
                        Create Profile
                   </button>
                </form>
            </DialogContent>
        </Dialog>
    )
};

export default NewProfileForm;
