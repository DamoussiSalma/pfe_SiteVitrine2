import {React,useState,useEffect} from "react";
import './annonceTable.scss'; 
import CenteredTabs from '../multiNav/multinav';
import Loader from '../loader/loader';
import { Button } from "@mui/material";
import {UserContextProvider} from "../userContext/userContext";
import { UserContext } from "../userContext/userContext";
//import AnnonceCard from "../annonceCard/annonceCard";
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Card from '../Card/card'
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const ListingsTable = () => {
    const navigate =useNavigate()
    const [loading, setLoading] = useState(true);
    const [listings,setListings]=useState([]);
    const [deleteConfirmation, setDeleteConfirmation] = useState(null);
    
    
    const handleDeleteConfirmation = (listingId) => {
      setDeleteConfirmation(listingId);
  };

  const handleCloseConfirmation = () => {
      setDeleteConfirmation(null);
  };

  const handleListingDelete = async (listingId) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

        const res = await fetch(`http://localhost:3000/annonce/${listingId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });
        const data = await res.json();
        if (data.success === false) {
            console.log(data.message);
            return;
        }
        setListings((prev) => prev.filter((listing) => listing._id !== listingId));
    } catch (error) {
        console.log(error.message);
    }
    setDeleteConfirmation(null); // Close the confirmation dialog
};
    // get User Listing
    const getUserListings = async () => {
        const accessToken = localStorage.getItem('accessToken')
        try {
          const response = await fetch("http://localhost:3000/annonce",
            {
              method: "GET",

              headers: {
                Authorization: `Bearer ${accessToken}`
              },
            }
          );
    
          const data = await response.json();
          console.log(data)
          setListings(data );
          setLoading(false);
        } catch (err) {
          console.log("Fetch Listings Failed", err.message);
        }
      };
    
      useEffect(() => {
        getUserListings();
      },[]);

  return (

    <>
      <CenteredTabs/>
    <h1 style={{padding :'0.5rem', marginLeft:'25px'}}>Mes annonces</h1>
        <div className="iconbuttons">
        <IconButton aria-label="delete" size="large" >
            <AddCircleIcon fontSize="inherit" onClick={() => {
        navigate("/host/publierannonce");
      }} /> 
        </IconButton>
        
        </div>
    <div className='listings'>
    

    {loading ? (
        <Loader />
      ) : (
        <div className="listings">
          {listings.map(
            ({
              _id,
              userId,
              images,
              titre,
              ville,
              nbGuest,
              nbChambre,
              price,
              status,
             
            }) => (
              <div key={_id}>
              <Card
                listingId={_id}
                creator={userId}
                title={titre}
                listingPhotoPaths={images}
                city={ville}
                price={price}
                nbGuest={nbGuest}
                nbRoom={nbChambre}
                status={status}
                onDelete={() => handleDeleteConfirmation(_id)} // Pass handleDeleteConfirmation as a prop
              />
              </div>
            )
          )}
        </div>
      )}
 <Dialog
         open={deleteConfirmation !== null}
         onClose={handleCloseConfirmation}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you realy want to delete your listing?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please choose Cancel or delete to confirm your action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} style={{color:'#4d4d4d'}} >Cancel</Button>
          <Button onClick={() => handleListingDelete(deleteConfirmation)} style={{color:'#942323'}} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
    
    </>
  );
};

export default ListingsTable;