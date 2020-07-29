import React from 'react'
import image1 from "../assets/7.png"


export default class LoyaltyBonus extends React.Component{

    render(){
        return(
            <>
            <div className="loyalty-info">
                <h1>Loyalty Bonus</h1>
                
                <p>We love our loyal clients and think you deserve to be rewarded for coming back to us.

                </p>
            </div>
            <div className="image1">
                <img src={image1}></img>
                </div>
            </>
        )
    }
}