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

    const handleSubmit= (event)=> {
        event.preventDefault();
        const formData=new FormData(event.currentTarget)
        const formJson = Object.fromEntries(formData.entries());
        const email=formJson.email
        const password=formJson.password
        console.log(email)
        handleClose();
};

return(
    <React.Fragment>
        <Button onClick={handleClickOpen}>
            Register
        </Button>
        <DialogTitle>Register</DialogTitle>
        
    </React.Fragment>
)}