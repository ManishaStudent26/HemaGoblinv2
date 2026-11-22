import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function RegisterForm(){
    const[open, setOpen]= React.useState(false);
    const handleClickOpen =()=>{
setOpen(false);
    };
    const handleClose=()=> {
        setOpen(false);
    }

    const handleSubmit= (event)=> {
        event.preventDefault();
        const formData=new FormData(event.currentTarget)
        const formJson = Object.fromEntries(formData.entries());
        const email=formJson.email
        const password=formJson.password
        const firstname=formJson.firstname
        const lastname=formJson.lastname
        console.log(email)
        console.log(firstname)
        handleClose(lastname);
};

return(
    <React.Fragment>
        <Button onClick={handleClickOpen}>
            Register instead
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit} id="register-form">
        <TextField
        autoFocus
        required
        margin="dense"
        id="email"
        name="email"
        label="Email"
        type="email"
        fullWidth
        variant="standard"
        />
        <TextField
        autoFocus
        required
        margin="dense"
        id="password"
        name="password"
        label="Password"
        type="password"
        fullWidth
        variant="standard"
        />
        <TextField
        autoFocus
        required
        margin="dense"
        id="firstname"
        name="firstname"
        label="firstname"
        type="text"
        fullWidth
        variant="standard"
        />
        <TextField
        autoFocus
        required
        margin="dense"
        id="lastname"
        name="lastname"
        label="lastname"
        type="text"
        fullWidth
        variant="standard"
        />
        </form>
        </DialogContent>
        <DialogActions>
        <Button type="submit" form ="register-form"></Button>
        </DialogActions>
        </Dialog>

    </React.Fragment>
)}