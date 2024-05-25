import React,{useState} from 'react';
import "./card.scss";
import {
  ArrowForwardIos,
  ArrowBackIosNew,
  
} from "@mui/icons-material";

import { FaBed } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const AnnonceCard = ({
    listingId,
    creator,
    title,
    listingPhotoPaths,
    city,    
    price,
    nbGuest,
    nbRoom,
    status,
    onDelete, // Function passed from parent component to handle delete action
  }) => {

/* SLIDER FOR IMAGES */
const [currentIndex, setCurrentIndex] = useState(0);


const goToPrevSlide = () => {
  setCurrentIndex(
    (prevIndex) =>
      (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
  );
};



const goToNextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length);
};

const navigate = useNavigate();


    return (  
        <div
      className="listing-card"
     
      
    >
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {listingPhotoPaths?.map((photo, index) => (
            <div key={index} className="slide">
              <img
                src={photo}
                alt={`photo ${index + 1}`}
              />
              <div
                className="prev-button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevSlide(e);
                }}
              >
                <ArrowBackIosNew sx={{ fontSize: "15px" }} />
              </div>
              <div
                className="next-button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextSlide(e);
                }}
              >
                <ArrowForwardIos sx={{ fontSize: "15px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <h3>
        {title}
      </h3>
      <p>{city}</p>
      <p><FaBed /> {nbRoom} Rooms , <HiUserGroup/> {nbGuest} Guests</p>

          <p>
            <span>${price}/per night</span>
          </p>    
         
      <div className='editSupprimer'>
       <IconButton aria-label="delete" size="large"
          onClick={onDelete}>
        <DeleteIcon fontSize="inherit"   />
        </IconButton>
        <IconButton aria-label="delete" size="large" onClick={() => {
        navigate(`/edit/${listingId}`);
      }}>
        <EditIcon fontSize="inherit"   />
        </IconButton>
      
      </div> 
      <div className='favorite'><span class="badge">{status}</span></div>
      
      
   
    </div>
  
    );
}
 
export default AnnonceCard;