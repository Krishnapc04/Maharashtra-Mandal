import React from 'react'
import "./Gallery.css"
import { Link } from 'react-router-dom';
// import event from "../../assests/images/event.jpg";

const EventCard = (props) => {
  const productLink = `/photos?event=${props.event}`;

  return (
    <>
    <Link to = {productLink}>
      
    <div className="e-card">
        <div className="e-img">
            <img src={props.image} alt="" />
        </div>
        <div className="e-name">
            <p>{props.name}</p>
        </div>
    </div>

    </Link>
    </>
  )
}

export default EventCard
