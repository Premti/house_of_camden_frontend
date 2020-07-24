import React from 'react'
import LoyaltyBonus from "./LoyaltyBonus"
import BirthdayDiscount from "./BirthdayDiscount"
import NhsOffer from "./NhsOffer"

export default class Offers extends React.Component{

    state = {
        loyaltyBonus: false,
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
            <>
            <br></br>
            <button name="loyaltyBonus" onClick={this.handleLoyaltyClick}>Loyalty bonus </button>
            <br></br>
            <button name="birthdayDiscount" onClick={this.handleBirthdayClick}>Birthday Discount</button>
            <br></br>
            <button name="otherOffer" onClick={this.handleNhsClick}>Nhs Offer</button>
            {this.state.loyaltyBonus ? <LoyaltyBonus /> : null}
            {this.state.birthdayDiscount ? <BirthdayDiscount /> : null}
            {this.state.otherOffer ? <NhsOffer /> : null}
            </>
        )
    }
}