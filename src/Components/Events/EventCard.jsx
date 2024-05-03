import React from 'react'
import { Link } from 'react-router-dom'
import './Event.css'

const EventCard = (props) => {
    const productLink = `/photos?event=${props.name}`;
  return (
    <>
      {/* <div class="card">
        <div className="title">
            <h2>{props.name} </h2>
        </div>
        <div className="c-contain">
          <div className="c-img">
            <img src={props.img} alt="" />
          </div>
          <div className="c-detial">
            <p>
            {props.detial}
            </p>
          </div>
          
        </div>
        <div className="c-btn">
          <Link to={productLink} ><p>View Photos</p></Link>
        </div>
      </div> */}


<div class="wrap animate pop">
	<div class="overlay">
		<div class="overlay-content animate slide-left delay-2">
			<h1 class="animate slide-left pop delay-2">{props.name}</h1>
			{/* <p class="animate slide-left pop delay-5 " >Kingdom: <em>Plantae</em></p> */}
		</div>
		<div class="image-content animate slide delay-5"></div>
		<div class="dots animate">
			<div class="dot animate slide-up delay-6"></div>
			<div class="dot animate slide-up delay-7"></div>
			<div class="dot animate slide-up delay-8"></div>
		</div>
	</div>
	<div class="text animate slide-left delay-2">
		<p><h2>{props.name}</h2> <br />{props.detial}</p>
    <div className="e-btn">
    <Link to={productLink}>
        <p>View Photos</p>
    </Link>
    </div>
    
	</div>
</div>

    </>
  )
}

export default EventCard
