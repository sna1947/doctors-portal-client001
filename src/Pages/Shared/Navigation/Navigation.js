import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'

const Navigation = () => {
  const {user,logOut} = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DOCTORS-PORTAL
          </Typography>
          
          <NavLink style={({isActive})=>{return {color:isActive?'red':'',textDecoration:'none', backgroundColor:'#ffff8d',borderRadius:10,margin:3 } }} 
         to='/home'><Button color="inherit">Home</Button></NavLink>

          {/* <NavLink style={{textDecoration:'none', backgroundColor:'#ffff8d',borderRadius:10,margin:3}} to='/home'><Button color="inherit">Home</Button></NavLink> */}
          
         <NavLink style={({isActive})=>{return {color:isActive?'red':'',textDecoration:'none', backgroundColor:'#ffff8d',borderRadius:10,margin:3} }} to ='/appointment'><Button color="inherit">Appointment</Button></NavLink>

         {/* <Link style={{textDecoration:'none', backgroundColor:'#ffff8d',borderRadius:10}} to ='/appointment'><Button color="inherit">Appointment</Button></Link> */}
{
user?.email? 
<Button onClick={logOut} color="inherit">Logout</Button> 
: 
<NavLink style={{textDecoration:'none', backgroundColor:'#e0e0e0',borderRadius:10,margin:4}} to='/login'><Button color="inherit">Login</Button></NavLink>
}
        

         <NavLink style={{textDecoration:'none', backgroundColor:'#ff9800',borderRadius:10}} to='/register'><Button color="inherit">Register</Button></NavLink>
          
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;