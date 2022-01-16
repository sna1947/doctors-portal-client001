import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings=[
{
id:'01',
name:'Teath Orthodonics',
time:'08:00am - 09:00am',
space:10,
},
{
id:'02',
name:'Cosmatic Dentistry',
time:'09:00am - 10:00am',
space:18,
},
{
id:'03',
name:'Teeth Clining',
time:'10:00am - 11:00am',
space:10,
},
{
id:'04',
name:'Cavity Protection',
time:'11:00am - 12 :00am',
space:18,
},
{
id:'05',
name:'Pediatric Dental',
time:'11:00am - 12 :00am',
space:12,
},
{
id:'06',
name:'Oral Surgery',
time:'11:00am - 12 :00am',
space:18,
},
]

const AvailableAppointments = ({date}) => {
    return (
        <Container>
            <Typography sx={{color:'#1b5e20',fontWeight:700, backgroundColor:'#ffc400',mb:3}} variant="h4" gutterBottom component="div">
            Available Appointments on {date.toDateString()}
           </Typography>
            
            <Grid container spacing={2}>
            {
              bookings.map(booking=><Booking
              key={booking}
              booking={booking}
              date={date}
              >
              </Booking>)
            }  
            </Grid>
        </Container>
       

    );
};

export default AvailableAppointments;