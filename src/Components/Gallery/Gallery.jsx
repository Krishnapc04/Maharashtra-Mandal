import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import data from './Gallery.json';
import EventCard from './EventCard';
import "./Gallery.css"
import ganesh from "../../assests/images/Gallery/GaneshUtsav/3.jpg"
import shiv from "../../assests/images/Gallery/Shivjayanti/13.jpg"
import arbh from "../../assests/images/Gallery/Aarambh/8.webp"
import bhr from "../../assests/images/Gallery/Bharari/8.jpg"
import gen from "../../assests/images/Gallery/General/Trip/9.jpg"




const Gallery = () => {

  return (
    <>
    <Navbar/>
    <div className="gallery">
      <div className="g-screen">
        <h1>Our Events</h1>

        <div className="all-events">
          <EventCard
          name = 'GaneshUtsav'
          image = {ganesh}
          event = "GaneshUtsav"
          />
          <EventCard
          name = 'Shiv Jayanti'
          image = {shiv}
          event = "Shivjayanti"
          />
          <EventCard
          name = 'Aarambh'
          image = {arbh}
          event = "Aarambh"
          />
          <EventCard
          name = 'Bharari'
          image = {bhr}
          event = "Bharari"
          />
          <EventCard
          name = 'Food Fest'
          image = ''
          event = "FoodFest"
          />
          <EventCard
          name = 'Misal Paw Party'
          image = ''
          event = "Misal Paw Party"
          />
          <EventCard
          name = 'General'
          image = {gen}
          event = "General"
          />
          

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Gallery
