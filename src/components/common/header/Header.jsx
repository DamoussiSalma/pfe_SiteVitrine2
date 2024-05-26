import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link ,useNavigate } from "react-router-dom"
import {useContext} from "react";
import {UserContext} from "../../userContext/userContext";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const [navList, setNavList] = useState(false)
  const {user} = useContext(UserContext);
  const navigate = useNavigate();

  const handleclick =()=>{
    if(user){navigate("/host/publierannonce")}
    else {
      navigate("/login")
  }
  
  }
  const handleclick2 =()=>{
    navigate("/login")
    }

    /*const logout =()=>{
      localStorage.removeItem("accessToken");
      
    }*/

  return (
    <>
      <header className='header'>
        <div className='container flex'>
          <div className='logo'>
          <Link to='/' color="blue"> <FaHome /> HomeKey</Link> 
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
           
          <div className='button flex'>

          {user && <h4>
            {user.name} 
          </h4>}
         
         {!user && <h4>
            <a onClick={handleclick2} style={{marginRight:20}}>s'authentifier</a>
          </h4>}
         
      
            
            
            <button className= 'btn1' onClick={handleclick}>
              <i className=''></i> publier annonce
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header
