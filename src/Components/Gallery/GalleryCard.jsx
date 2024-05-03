import React from 'react'
import "./Gallery.css"
import { Link } from 'react-router-dom';
// import event from "../../assests/images/event.jpg";

const EventCard = (props) => {
  const productLink = `/photos?event=${props.event}`;

  return (
    <>
    {/* <Link to = {productLink}>
      
    <div className="e-card">
        <div className="e-img">
            <img src={props.image} alt="" />
        </div>
        <div className="e-name">
            <p>{props.name}</p>
        </div>
    </div>

    </Link> */}

    {/* 3D Card  */}

    
    <Link to={productLink}>
  <div class="card">
    <div class="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" alt="Mythrill" class="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" alt="Mythrill" class="title" />
    {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" alt="Mythrill" class="character" /> */}
    <img src="/Gallery/ganesha.png" alt="Mythrill" class="character" />
  </div>
</Link>
  
    </>
  )
}

export default EventCard
