import React from 'react'
import LoyaltyBonus from "./LoyaltyBonus"
import BirthdayDiscount from "./BirthdayDiscount"
import NhsOffer from "./NhsOffer"
import "./Offers.css"

export default class Offers extends React.Component{

    state = {
        loyaltyBonus: true,
        birthdayDiscount: false,
        otherOffer: false
    }

    handleLoyaltyClick = () => {
        this.setState({loyaltyBonus :  true,
            birthdayDiscount : false,
            otherOffer: false
        })
    }

    handleBirthdayClick = () => {
        this.setState({loyaltyBonus :  false,
            birthdayDiscount : true,
            otherOffer: false
        })
    }

    handleNhsClick = () => {
        this.setState({loyaltyBonus : false,
            birthdayDiscount : false,
            otherOffer: true
        })
    }

    render(){
        return(
            <div className="offers">
            <div className="offer-buttons">
            <span name="loyaltyBonus" onClick={this.handleLoyaltyClick}>Loyalty bonus </span>
            <span name="birthdayDiscount" onClick={this.handleBirthdayClick}>Birthday Discount</span>
            <span name="otherOffer" onClick={this.handleNhsClick}>Nhs Offer</span>
            </div>
            <div className="offer-info">
            {this.state.loyaltyBonus ? <LoyaltyBonus /> : null}
            {this.state.birthdayDiscount ? <BirthdayDiscount /> : null}
            {this.state.otherOffer ? <NhsOffer /> : null}
            </div>
            </div>
        )
    }
}