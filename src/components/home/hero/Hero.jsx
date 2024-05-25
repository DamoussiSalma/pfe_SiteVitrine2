import {React} from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Hero = () => {
  /*const [value, setValue] =useState([]);*/

  const lieu = [
    {
      value: 'sousse',
      label: 'sousse',
    },
    {
      value: 'monastir',
      label: 'monastir',
    },
    {
      value: 'ain drahem',
      label: 'ain drahem',
    },
    
  ];
  
 
  return (
  <>
    <section className='hero'>
      <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex'>
              <Box
                component="form"
                  sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
              >
       
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Emplacement"
                    defaultValue="sousse"
                    helperText="Please select a city "
                    >
                  {lieu.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                  </TextField>

                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Qu'est ce que tu cherches"
                    defaultValue="appartement"
                    helperText="Please select a type "
                    >
                  {lieu.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                  </TextField>
        
        
                  <TextField
                    id="outlined-number"
                    label="Nonbre invites"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                      }}
                  />
      
              </Box>
            
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
        </form>
    </div>
  </section>
</>
  )
}

export default Hero
