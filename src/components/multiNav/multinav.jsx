import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import './multinav.scss';
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', padding:'2rem' }}>
      <Tabs value={value} onChange={handleChange} centered >
      <Link className='link' to='/host/annonces'><Tab label="Annonces" /></Link>
        <Link className='link' to='/calender'><Tab label="Calendrier" /></Link>
        <Link className='link' to='/host/reservations'><Tab label="Reservations" /></Link>
        <Link className='link' to='/overview'><Tab label="OverView" /></Link>
      
      </Tabs>
    </Box>
  );
}

