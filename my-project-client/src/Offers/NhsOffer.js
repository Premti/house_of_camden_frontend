import React from 'react'


export default class NhsOffer extends React.Component{

    render(){
        return(
          
            <>
                <div className="info">
                    <h1>Nhs Discount</h1>
                    <p>
                        To thank and show support to all NHS workers we are giving a 25% discount on all treatments
                        from Monday-Thursday.
                    </p>
                    <h3>Terms & Conditions</h3>
                    <p>
                        1. Not valid in conjuction with any other offer.
                        <br></br>
                        2.Proof of I.D will be required to receive the discount.
                    </p>
                </div>
               
                <div className="image">
                <img src="http://www.hobsalons.com/_assets/media/offer/13_background.jpg" alt=""></img>
                </div>
            </>
          
        )
    }
}