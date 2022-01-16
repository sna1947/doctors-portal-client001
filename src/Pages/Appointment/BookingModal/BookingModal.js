import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({openBooking,handleBookingClose,booking,date}) => {
    const { name, time, space } = booking;

const bookingSubmit=e=>{
    alert('Submiting')
    //collect data
    //send to the server
e.preventDefault()
handleBookingClose()
}

    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Service Name: {name}
          </Typography>
          <form onSubmit={bookingSubmit}>
          <TextField
          disabled
          label="Time"
          id="outlined-size-small"
          defaultValue={time}
          size="small"
          sx={{width:'90%',mt:2}}
        />
          <TextField
          label="Your name"
          id="outlined-size-small"
          defaultValue='Your name'
          size="small"
          sx={{width:'90%',my:2}}
        />
          <TextField
          label="Phone Number"
          id="outlined-size-small"
          defaultValue='Phone Number'
          size="small"
          sx={{width:'90%'}}
        />
          <TextField
          label="Email Id"
          id="outlined-size-small"
          defaultValue='Email Id'
          size="small"
          sx={{width:'90%',my:2}}
        />
          <TextField
          label="Date"
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
          sx={{width:'90%'}}
        />
        <Button type='submit' sx={{width:'90%',my:3}} variant="contained">Submit</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;