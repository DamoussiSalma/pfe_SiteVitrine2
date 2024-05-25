import { useEffect, useState } from "react";
import "./listingDetails.scss";
import { useParams } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import Footer from '../../common/footer/Footer'
import Loader from "../../loader/loader";
import {useContext} from "react";
import {UserContext} from "../../userContext/userContext";
import { facilities } from "../../data/Data";
import Reviews from "../../reviews/reviews";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { FaBed } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import BathtubIcon from '@mui/icons-material/Bathtub';
import SingleBedIcon from '@mui/icons-material/SingleBed';
const ListingDetails = () => {
  const [loading, setLoading] = useState(true);

  const {user} = useContext(UserContext);
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  
    const getListingDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/annonce/${listingId}`,
          {
            method: "GET",
          }
        );
  
        const data = await response.json();
        setListing(data);
        setLoading(false);
      } catch (err) {
        console.log("Fetch Listing Details Failed", err.message);
      }
    };
  
    useEffect(() => {
      getListingDetails();
    }, []);
  
    //console.log(listing)
  
  
    /* BOOKING CALENDAR */
    const [dateRange, setDateRange] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  
    const handleSelect = (ranges) => {
      // Update the selected date range when user makes a selection
      setDateRange([ranges.selection]);
    };
  
    const start = new Date(dateRange[0].startDate);
    const end = new Date(dateRange[0].endDate);
    const dayCount = Math.round(end - start) / (1000 * 60 * 60 * 24); // Calculate the difference in day unit
  
    /* SUBMIT BOOKING */

    //const navigate = useNavigate()
  
    /*const handleSubmit = async () => {
      try {
        const bookingForm = {
          customerId,
          listingId,
          hostId: listing.creator._id,
          startDate: dateRange[0].startDate.toDateString(),
          endDate: dateRange[0].endDate.toDateString(),
          totalPrice: listing.price * dayCount,
        }
  
        const response = await fetch("http://localhost:3001/bookings/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingForm)
        })
  
        if (response.ok) {
          navigate(`/${customerId}/trips`)
        }
      } catch (err) {
        console.log("Submit Booking Failed.", err.message)
      }
    }*/
  
    
  
    return loading ? (
      <Loader />
    ) : (
      <>
       
        <div className="listing-details">
          <div className="title">
            <h1>{listing.titre}</h1>
            <div><IconButton style={{marginRight:'6rem'}} >
              <FavoriteBorderIcon style={{color:'#942323'}}/> 
              </IconButton> 
              
              </div>
          </div>
  
          <div className="photos">
            {listing.images?.map((item) => (
              <img
                src={item}
                alt="listing photo"
              />
            ))}
          </div>
  
          <h2>
            {listing.type} in {listing.ville}, {listing.adresse}{" "}
            {listing.country}
          </h2>
          <p>
            <HiUserGroup/> {listing.nbGuest} guests - <FaBed/> {listing.nbChambre} bedroom(s) -{" "}
            <SingleBedIcon/> {listing.nbBed} bed(s) - <BathtubIcon/> {listing.nbBath} bathroom(s)
          </p>
          <hr />
  
          <div className="profile">
           
            <h3>
              Hosted by  
            </h3>
          </div>
          <hr />
  
          <h3>Description</h3>
          <p>{listing.description}</p>
          <hr />

  
          <div className="booking">
            <div>
              <h2>What this place offers?</h2>
              <div className="amenities">
                {listing.ameneties[0].split(",").map((item, index) => (
                  <div className="facility" key={index}>
                    <div className="facility_icon">
                      {
                        facilities.find((facility) => facility.name === item)
                          ?.icon
                      }
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <hr />
              <h2>Reviews</h2>

              <div className="reviews">
                <div className="flex-item"><Reviews/></div>
                <div className="flex-item"><Reviews/></div>
                <div className="flex-item"><Reviews/></div>
                <div className="flex-item"><Reviews/></div>
                <div className="flex-item"><Reviews/></div>
                <div className="flex-item"><Reviews/></div>
                
              </div>
              
            </div>
         
            <div>
              <h2>How long do you want to stay?</h2>
              <div className="date-range-calendar">
                <DateRange ranges={dateRange} onChange={handleSelect} />
                {dayCount > 1 ? (
                  <h2>
                    ${listing.price} x {dayCount} nights
                  </h2>
                ) : (
                  <h2>
                    ${listing.price} x {dayCount} night
                  </h2>
                )}
  
                <h2>Total price: ${listing.price * dayCount}</h2>
                <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
                <p>End Date: {dateRange[0].endDate.toDateString()}</p>
  
                <button className="button" type="submit" >
                  BOOKING
                </button>
              </div>
            </div>
            
          </div>
          
          
    </div>
    
        <Footer/>
      </>
    );
     
    
  };
  
  export default ListingDetails;