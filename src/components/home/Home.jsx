import React from "react"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Recent from "./recent/Recent"
import Footer from "../common/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero/>
      <Featured/>
      <Recent/>
      <Location/>
      <Footer/>
    </>
  )
}

export default Home
