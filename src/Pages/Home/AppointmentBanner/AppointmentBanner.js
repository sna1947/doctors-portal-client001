import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import Typography from '@mui/material/Typography';
import { margin } from '@mui/system';
import { Button } from '@mui/material';

const appoinmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,75,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appoinmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: '-110px' }} src={doctor} alt="" />
                </Grid>

                <Grid item xs={12} md={6} 
                sx={{display:'flex',
                justifyContent:'flex-start', 
                alignItems: 'center',
                textAlign:'left'}}>
                    <Box>
                        <Typography variant='h6'sx={{mb:5}} style={{ color: '#03a9f4' }}>
                            APPOINMENT
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }}>
                            Make an Appointment today
                        </Typography>
                        <Typography variant='h6'sx={{my:2}} style={{ color: 'white', fontSize: 14 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, facilis!<br/> amet consectetur adipisicing elit. Nulla
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;