import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmLogout = ({logoutOpen, handleLogout, closeConfirmLogout}) => {


    return (

        <div>

            <Dialog
                open={logoutOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to log out?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={() => closeConfirmLogout()} color="primary">
                        No 
                    </Button>
                    <Button onClick={() => handleLogout()} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
};

export default ConfirmLogout;


