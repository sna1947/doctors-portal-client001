import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';


const Login = () => {

const [logingData, setLoginData] = useState({})

const handelOnchange = e =>{
const field = e.target.name;
const value = e.target.value;

const newLoginData={...logingData};
newLoginData[field]=value;
setLoginData(newLoginData);
// console.log(field,value);
}
    const handelFormSubmit = e =>{
        alert('submited')
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid  sx={{mt:20 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handelFormSubmit} >
                        <TextField
                            sx={{width:'75%', }}
                            id="standard-basic"
                            label="Your Email"
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
                            
                            <Button sx={{width:'75%',mt:2}} type='submit' variant='contained'>Login</Button>
                            <NavLink style={{textDecoration:'none'}} to='/register'><Button variant="text">New user? Please Register!!</Button></NavLink>
                    </form>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;