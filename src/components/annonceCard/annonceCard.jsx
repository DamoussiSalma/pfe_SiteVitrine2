import React,{useState} from 'react';
import "./annonceCard.scss";
import {
  ArrowForwardIos,
  ArrowBackIosNew,
  Favorite,
} from "@mui/icons-material";
import { FaBed } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const AnnonceCard = ({
    listingId,
    creator,
    title,
    listingPhotoPaths,
    city,    
    price,
    nbGuest,
    nbRoom,
    
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
      onClick={() => {
        navigate(`/annonce/${listingId}`);
      }}
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

      <button className="favorite">
          <Favorite sx={{ color: "white" }} />
      </button>
    </div>
  
    );
}
 
export default AnnonceCard;