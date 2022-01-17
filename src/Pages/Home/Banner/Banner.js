import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const backgroundBg={
background:`url(${bg})`
}

const Banner = () => {
    return (
        <Container  style={backgroundBg} sx={{ flexGrow: 1 ,my:3}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{textAlign:'left'}}>
                   <Box>
                   <Typography variant="h3">
                            Your New Smile <br /> Starts Hare
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, my: 2 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolore voluptate quaerat ut mollitia ex quibusdam perferendis ipsam blanditiis a?
                        </Typography>

                        <NavLink style={{ backgroundColor: '#ffff8d',textDecoration:'none' }} to='/appointment'><Button  variant="contained">Get Appointment</Button></NavLink>
                        
                   </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '400px' }} src={chair} alt="chair" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;