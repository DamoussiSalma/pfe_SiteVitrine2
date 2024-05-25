import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import ReservationTables from '../../reservationTable/reservationTable';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import './reservation.scss'
const Reservation = () => {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    

    
  
    return ( 
        <>
        <Box sx={{ width: '100%', bgcolor: 'background.paper', padding:'2rem' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Link className='link' to='/host/annonces'><Tab label="Annonces" /></Link>
        <Link className='link' to='/calender'><Tab label="Calendrier" /></Link>
        <Link className='link' to='/host/reservations'><Tab label="Reservations" /></Link>
        <Link className='link' to='/overview'><Tab label="OverView" /></Link>
      
      </Tabs>
    </Box>
        
        <h1 style={{padding :'0.5rem', marginLeft:'25px'}}>Reservations</h1>
        <Stack direction="row" spacing={2} marginLeft={20}>
        <Button variant="text" href="#outlined-buttons"  style={{color:'#373737'}} startIcon={<HourglassEmptyIcon/>}>
          En attente de confirmation
          </Button>
          <Button variant="text" href="#outlined-buttons"  style={{color:'#373737'}} startIcon={<HourglassBottomIcon/>}>
          En cours
          </Button>
          <Button variant="text" style={{color:'#373737'}} startIcon={<HighlightOffIcon/>}>Cancelled</Button>
          <Button variant="text"  style={{color:'#373737'}} startIcon={<CheckCircleOutlineIcon/>}>
            Terminer
          </Button>

        </Stack>
        <br></br>
        <ReservationTables/>
        
        </>
     );
}
 
export default Reservation;