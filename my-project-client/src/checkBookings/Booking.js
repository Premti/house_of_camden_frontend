import React from 'react'



export default class Booking extends React.Component{

    render(){
        return(
          
            <div className="a-booking">
          <h4 className="name"> Name: {this.props.booking.name} </h4>
          <h4 className="time">Time: {this.props.booking.time}:00 </h4> 
            <h4 className="appointment">  Appointment: {this.props.booking.appointment_type} </h4>
           <h4 className="number">Number:{this.props.booking.phone_number} </h4>
            <h4 className="email">Email: {this.props.booking.email}</h4> 
            </div>
       
        )
    }
}