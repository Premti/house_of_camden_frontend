import React from 'react'
import ConfirmBookings from "./ConfirmBookings"

export default class AllBookings extends React.Component{


    constructor(){
        super()
        this.state = {
        allBookings: [],
    }}

    componentDidMount(){
        fetch("http://localhost:3000/check_all_bookings")
        .then(res => res.json())
        .then(res => this.setState({allBookings: res.response,
        
        }))
        .catch(error => console.log(error.message));
    }

    


    render(){
        
        
        const renderBookings = this.state.allBookings.map((booking) => 
            <ConfirmBookings key={booking.id} booking={booking} />
        )

       
        return(
            <>
            <div>
                The current bookings
                {renderBookings}
                
            </div>
            </>
        )
    }
}