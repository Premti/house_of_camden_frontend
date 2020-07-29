import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


export default class NavBar extends React.Component{

    render(){
        return(
         
            <div className="navbar">
                <div className="home" >
            <Link to="/home" >House Of Camden    </Link>
            </div>
            <div className="nav">
          <Link to="/admin">Admin  </Link>
          <button onClick={() => this.props.onClick()}>  Bookings </button>
          <Link to="/offers">  Offers </Link>
          <Link to="/prices">  Prices </Link>
          {this.props.loggedInAdmin && <Link to="/checkBookings">  Check bookings </Link> }
          {this.props.loggedInAdmin && <Link to="/allTheBookings">  All Bookings </Link> }
          </div>
          <div className="insta">
          <a href="https://www.instagram.com/houseofcamdensalon/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
            </div>
        )
    }
}