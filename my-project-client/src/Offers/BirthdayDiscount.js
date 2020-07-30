import React from 'react'
import image1 from "../assets/8.png"


export default class BirthdayDiscount extends React.Component{

    render(){
        return(
            <>
            <div className="loyalty-info">
                <h1>Special Offers</h1>
                <p>
                    Not only do we love seeing familiar faces but also new faces!
                As a welcome gesture we'd like to give customers 20% off on all treatments booked online for your first visit.
                On top of that we are also giving 15% off all treatments for referrals on new clients.
                </p>
                <h3>Terms & Conditions</h3>
                <p>
                    1. Not valid in conjunction with other offers.
                    <br></br>
                    2. Must show the confirmation email recieved once a booking is made.
                    <br></br>
                    3. This offer runs from August 1st - October 1st.
                </p>
            </div>
            <div className="image1">
                <img src={image1} alt=""></img>
                </div>   
                </>      
        )
    }
}