import React from 'react'



export default class Booking extends React.Component{

    render(){
        return(
          
            <div className="a-booking">
               <p className="booking-name"> {this.props.booking.name} </p>  <p className="booking-appointment"> {this.props.booking.appointment_type}     </p>  <p className="booking-time">  {this.props.booking.time}:00</p>
            </div>
       
        )
    }
}