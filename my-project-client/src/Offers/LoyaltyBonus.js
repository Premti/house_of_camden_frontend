import React from 'react'
import image1 from "../assets/7.png"


export default class LoyaltyBonus extends React.Component{

    render(){
        return(
            <>
            <div className="loyalty-info">
                <h1>Loyalty Bonus</h1>
                
                <p>We love our loyal clients and think you deserve to be rewarded for coming back to us.
                    For us gifting is creating a relationship. Your loyalty is something we highly value.
                    As a loyalty reward we give our clients 15% of treatments every fifth time you are with us
                </p>
                <h3>Terms & conditions</h3>
                <p>
                    1. Not valid in conjuction with any other offer.
                    <br></br>
                    2. If you have not reached your 5th appointment within a 6 month time span, the loyalty scheme
                     will start over.
                </p>
            </div>
            <div className="image1">
                <img src={image1} alt=""></img>
                </div>
            </>
        )
    }
}