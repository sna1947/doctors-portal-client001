import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';


const services = [
    {
        name: 'Fluoride Treatment',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ullam, illum assumenda suscipit harum at aliquid porro repellat nam sapiente!',
        img:fluoride
    },
    {
        name: 'Cavity Filling',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ullam, illum assumenda suscipit harum at aliquid porro repellat nam sapiente!',
        img:Cavity
    },
    {
        name: 'Teeth Whitening',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ullam, illum assumenda suscipit harum at aliquid porro repellat nam sapiente!',
        img:Whitening
    }
]

const Services = () => {
    return (
   
            <Box sx={{ flexGrow: 1 }}>
                 <Container>
                 <Typography sx={{fontWeight:900,m:2,color:'success.main'}} variant="h6" component="div">
                      OUR SERVICES
                </Typography>
                 <Typography sx={{fontWeight:900,color:'warning.main',m:2}} variant="h4" component="div">
                      SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {
                    services.map(service=><Service
                    key={service.name}
                    service={service}
                    ></Service>)  
                  }
                </Grid>
                </Container>
            </Box>
      

    );
};

export default Services;