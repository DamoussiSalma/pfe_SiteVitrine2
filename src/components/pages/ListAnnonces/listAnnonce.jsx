import {React,useState,useEffect} from "react";
import './listAnnonce.scss';
import { categories } from "../../data/Data";
import Loader from '../../loader/loader'
import AnnonceCard from "../../annonceCard/annonceCard";

const ListAnnonce = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(true);
    const [listings,setListings]=useState([]);

    const getFeedListings = async () => {
        try {
          const response = await fetch(
            selectedCategory !== "All"
              ? `http://localhost:3000/annonce/all?categorie=${selectedCategory}`
              : "http://localhost:3000/annonce/all",
            {
              method: "GET",
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
        getFeedListings();
      }, [selectedCategory]);

    return(
    <>
    
    <div className="category-list">
        {categories?.map((category, index) => (
          <div
            className={`category ${category.label === selectedCategory ? "selected" : ""}`}
            key={index}
            onClick={() => setSelectedCategory(category.label)}
          >
            <div className="category_icon">{category.icon}</div>
            <p>{category.label}</p>
          </div>
        ))}
      </div>

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
             
            }) => (
              <AnnonceCard
                listingId={_id}
                creator={userId}
                title={titre}
                listingPhotoPaths={images}
                city={ville}
                price={price}
                nbGuest={nbGuest}
                nbRoom={nbChambre}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default ListAnnonce