import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal'

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper sx={{ py: 5, backgroundColor: '#f3e5f5' }} elevation={3} >
                    <Typography sx={{ color: '#1b5e20', fontWeight: 700 }} variant='h5' gutterBottom component='div'>
                        Name: {name}
                    </Typography>
                    <Typography variant='h6' gutterBottom component='div'>
                        Time: {time}
                    </Typography>

                    <Typography variant="caption" display="block" gutterBottom>
                        Available Space: {space}
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
    );
};

export default Booking;