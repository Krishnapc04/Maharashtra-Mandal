import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import data from './Gallery.json';
import EventCard from './GalleryCard';
import "./Gallery.css"
// import ganesh from "/Gallery/GaneshUtsav/3.jpg"
// import shiv from "Gallery/Shivjayanti/13.jpg"
// import arbh from "Gallery/Aarambh/8.webp"
// import bhr from "/Gallery/Bharari/8.jpg"
// import gen from "/Gallery/General/Trip/9.jpg"




const Gallery = () => {

  return (
    <>
    <Navbar/>
    <div className="gallery">
      <div className="g-screen">
        <h1>Our Gallery</h1>

        <div className="all-events">
          <EventCard
          name = 'GaneshUtsav'
          image = '/Gallery/GaneshUtsav/3.jpg'
          event = "GaneshUtsav"
          />
          <EventCard
          name = 'Shiv Jayanti'
          image = '/Gallery/Shivjayanti/13.jpg'
          event = "Shivjayanti"
          />
          <EventCard
          name = 'Aarambh'
          image = '/Gallery/Aarambh/8.webp'
          event = "Aarambh"
          />
          <EventCard
          name = 'Bharari'
          image = '/Gallery/Bharari/8.jpg'
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
          image = '/Gallery/General/Trip/9.jpg'
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
