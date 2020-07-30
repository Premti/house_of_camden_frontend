import React from 'react'
import ConfirmBookings from "./ConfirmBookings"
import "./CheckBookings.css"

export default class AllBookings extends React.Component{


    constructor(){
        super()
        this.state = {
        allBookings: []
    }}

    renderRejectionEmail = () => {
        this.setState({emailRejected : true})
    }

    componentDidMount(){
        fetch("http://localhost:3000/check_all_bookings")
        .then(res => res.json())
        .then(res => this.setState({allBookings: res.response,
        
        }))
        .catch(error => console.log(error.message));
    }

    


    render(){
        
        
        const renderBookings = this.state.allBookings.map((booking, index) => 
           <div key={booking.id}  className={` ${index%2===0 ? "even" : "odd"} `}> <ConfirmBookings  booking={booking}  
           /></div> 
        )

       
        return(
         
            <div>
                <h2>The current bookings</h2>
                <br></br>
                {renderBookings}
                
            </div>
           
        )
    }
}