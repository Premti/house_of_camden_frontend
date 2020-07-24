import React from 'react'


export default class Booking extends React.Component{

    render(){
        return(
            <>
            <div>
                {this.props.booking.name} | {this.props.booking.appointment_type} | {this.props.booking.time}:00
            </div>
            </>
        )
    }
}