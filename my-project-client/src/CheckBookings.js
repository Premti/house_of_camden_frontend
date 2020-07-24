import React from 'react'
import Booking from "./Booking"

export default class CheckBookings extends React.Component{


    constructor(){
        super()
        const today = new Date()
        const currentDate = today.getFullYear() + '-' + this.findMonth() + '-' + today.getDate();
        this.state = {
        allBookings: [],
        date: currentDate
    }}

    findMonth = () => {
        const getMonth = new Date().getMonth() + 1
        if (getMonth < 10){ return "0" + getMonth}
        else {return getMonth}
    }

    componentDidMount(){
        fetch("http://localhost:3000/check_all_bookings")
        .then(res => res.json())
        .then(res => this.setState({allBookings: res.response,
        
        }))
        .catch(error => console.log(error.message));
    }

    
    todaysBookings = () => {
        const bookings = this.state.allBookings.filter(booking => booking.date === this.state.date)
        
        const bookingsToRender = bookings.map(booking => 
            <Booking key={booking.id} booking={booking} />
        )
        //debugger

        return bookingsToRender
    }

    render(){
        return(
            <>
            <div>
                The current bookings
                {
                    this.state.allBookings !== null 
                    ? this.todaysBookings() 
                    : <p>No bookings today!</p> 
                }
                 {this.state.date}
            </div>
            </>
        )
    }
}