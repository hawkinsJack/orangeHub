import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AdminLogin = ({ loginAdmin, open, handleClose, failMessage }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUserEmailInput = (e) => {
        setEmail(e.target.value)
    };

    const handleUserPasswordInput = (e) => {
        setPassword(e.target.value)
    };

    useEffect(() => {

        if(!failMessage){
            return;
        }
        setPassword('')

    }, [failMessage])

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login as Admin</DialogTitle>
            <DialogContent>
                {
                    failMessage &&
                    <div className="alert alert-danger" role="alert">
                        <strong>Oh snap!</strong> {failMessage} - Please try again
                    </div>
                }
                <form onSubmit={(e) => {
                    e.preventDefault()
                    loginAdmin({email, password})
                }}>
                    <TextField
                        autoFocus
                        required={true}
                        margin="dense"
                        id="outlined-basic"  
                        variant="outlined"
                        label="Enter Email Address"
                        type="email"
                        onChange={(e) => handleUserEmailInput(e)}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        required={true}
                        margin="dense"
                        id="outlined-basic"  
                        variant="outlined"
                        label="Enter Password"
                        type="password"
                        onChange={(e) => handleUserPasswordInput(e)}
                        fullWidth
                    />
                   <button
                   className="btn bg-light" 
                   type="submit">
                       Login
                   </button>
                   <button
                    className="btn bg-light"
                    onClick={() => handleClose()}>
                       Close
                   </button>
                </form>
            </DialogContent> 
        </Dialog>
    )
};

export default AdminLogin;
