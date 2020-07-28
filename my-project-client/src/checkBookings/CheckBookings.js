import React from 'react'
import Booking from "./Booking"
import "./CheckBookings.css"

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
        
        const bookingsToRender = bookings.map((booking, index) => <div key={booking.id}  className={` ${index%2===0 ? "even" : "odd"} `}>
            <Booking booking={booking} index={index} />
        
          </div>
        )
        //debugger

        return bookingsToRender
    }

    render(){
        return(
            <>
            <div>
               <h2> The current bookings for {this.state.date}</h2><hr></hr>
                {
                    this.state.allBookings !== null 
                    ? this.todaysBookings() 
                    : <p>No bookings today!</p> 
                }
                 
            </div>
            </>
        )
    }
}