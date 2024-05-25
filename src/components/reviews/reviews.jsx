
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Rating from '@mui/material/Rating';

const Reviews =()=>{

    return(
            
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                     avatar={
               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  S
                 </Avatar>
                       }
      
               title="Salma damoussi"
               subheader="Mai 14, 2024"
                 />
                <Rating style={{margin:'20px'}} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly color='yellow'/>
             <CardContent>
              <Typography variant="body2" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              </Typography>
            </CardContent>
          </Card>
              
    );
};
export default Reviews;