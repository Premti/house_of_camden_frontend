import React from 'react'



export default class Booking extends React.Component{

    render(){
        return(
          
            <div className="a-booking">
          <div className="name"> Name: {this.props.booking.name} </div>  <div>  Appointment: {this.props.booking.appointment_type} </div>
          Time: {this.props.booking.time}:00 Number: {this.props.booking.phone_number} Email: {this.props.booking.email}
            </div>
       
        )
    }
}