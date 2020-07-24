import React from 'react'


export default class BookingComplete extends React.Component{

    render(){
        return(
            <>
            Thank you for booking your appointment {this.props.bookingInfo.name}!
            We will send you confirmation of your booking as soon as we can. 
            </>
        )
    }
}