import React from 'react'

import './Team.css'
import { Link } from 'react-router-dom'

const TeamCard = (props) => {

  return (
    <>
      <div className="t-card">
        <div className="t-img">
          <img src="/Gallery/team/krishna1.jpeg" alt="" />
        </div>
        <div className="t-info">
          <h3>Krishna Chaudhari</h3>
          <p>Head</p>
          <div className="t-media">
            <Link to=""><i className="fab fa-facebook-f"></i></Link>
            {/* <Link to=""><i className="fab fa-twitter"></i></Link> */}
            <Link to=""><i className="fab fa-instagram"></i></Link>
            <Link to=""><i className="fab fa-linkedin-in"></i></Link>
            {/* <Link to=""><i className="fab fa-envelope"></i></Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamCard
