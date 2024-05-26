import {React,useContext} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../home/Home"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Login from "../login/login2"
import Register from "../Register/register"
import CreateListing from "../pages/createAnnonce/createListing";
import ListingDetails from "../pages/listingdetails/listingDetails"
import {UserContextProvider} from "../userContext/userContext";
import { UserContext } from "../userContext/userContext";
import Header from "../common/header/Header";
import ListAnnonce from "./ListAnnonces/listAnnonce";
import ListingsTable from "../annonceTable/annonceTable";
import Profile from "./profilePage/profilePage";
import Reservation from "./Reservations/reservation";
import EditListing from "./editAnnonce/editAnnonce";
//import Navbar from "../navbar2/navbar2";
//{!user?.role==='admin'&&<Header />}

const Pages = () => {
  const {user}=useContext(UserContext)
  console.log(user)
  return (
    <>
      <UserContextProvider>
      <Router>
      <Header/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/host/publierannonce' element={<CreateListing />} />
        <Route path='/edit/:listingId' element={<EditListing />} />
        <Route path='/annonce/:listingId' element={<ListingDetails />} />
        <Route path='/annonce' element={<ListAnnonce />} />
        <Route path='/host/annonces' element={<ListingsTable />} />
        <Route path='/host/reservations' element={<Reservation />} />
        <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
      </UserContextProvider>

    </>
  )
}

export default Pages
