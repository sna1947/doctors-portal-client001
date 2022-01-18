import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {

const [registerData, setRegisterData] = useState({})

const {user,authError, registerUser, isLoding}=useAuth();

const handelOnchange = e =>{
const field = e.target.name;
const value = e.target.value;

const newRegisterData={...registerData};
newRegisterData[field]=value;
setRegisterData(newRegisterData);
console.log(field, value,newRegisterData )
};

const handelFormSubmit = e =>{
    if(registerData.password !== registerData.password2){
        alert('Password did not match');
        return;
    }
    registerUser(registerData.email, registerData.password);
    // alert('submited')
    e.preventDefault();
};
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid  sx={{mt:20 }} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Register</Typography>
                {!isLoding && <form onSubmit={handelFormSubmit} >
                    <TextField
                        sx={{width:'75%', }}
                        id="standard-basic"
                        label="Your Email"
                        type='email'
                        name ='email'
                        onChange={handelOnchange}
                        variant="standard" />
                    <TextField
                        sx={{width:'75%', my:2}}
                        id="standard-basic"
                        label="Password"
                        type='password'
                        name= 'password'
                        onChange={handelOnchange}
                        variant="standard" />
                    <TextField
                        sx={{width:'75%', my:2}}
                        id="standard-basic"
                        label="Re Type Your Password"
                        type='password'
                        name= 'password2'
                        onChange={handelOnchange}
                        variant="standard" />
                        
                        <Button sx={{width:'75%',mt:2}} type='submit' variant='contained'>Register</Button>

                        <NavLink style={{textDecoration:'none'}} to='/login'><Button variant="text">Alrady User? Please Login</Button></NavLink>
                </form>}
                {isLoding && <CircularProgress color="secondary" />}
                {user?.email && <Alert severity="success">user successfully created!</Alert>}
                {authError && <Alert severity="error"> {authError} </Alert>}

            </Grid>

            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={login} alt="login" />
            </Grid>
        </Grid>
    </Container>
    );
};

export default Register;