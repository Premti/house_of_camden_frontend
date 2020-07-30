import React from 'react'
import RejectionEmail from "./RejectionEmail"


export default class ConfirmBookings extends React.Component{

    state = {
        confirmed : false,
        emailRejected: false,
        message: ""
    }

    handleConfirmation = () => {
        const confirmBooking = this.setState({confirmed: true})
        const configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(confirmBooking)
          }
          fetch(`http://localhost:3000/confirm_bookings/${this.props.booking.id}`, configObj)
          .then(res => res.json())
    }

    handleRejection = () => {
        const confirmBooking = this.setState({confirmed: true})
        const configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(confirmBooking)
          }
          fetch(`http://localhost:3000/reject_bookings/${this.props.booking.id}`, configObj)
          .then(res => res.json())
    }

    renderRejectionEmail = () => {
        this.setState({emailRejected : true})
    }

    handleChange = (e) => {
        this.setState({ message : e.target.value})
    }

    handleSubmit = (e) => {
        debugger
        e.preventDefault()
        const rejectionEmail = this.state.message
        const configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({ message: rejectionEmail })
          }
          fetch(`http://localhost:3000/reject_bookings/${this.props.booking.id}`, configObj)
          .then(res => res.json())
          .then(message => {
              debugger
              this.setState({message: "", emailRejected: false})
          })
    }

    render(){
        return(
          <div >
            <div className="a-booking">
                <br></br>
                <h4>{this.props.booking.name}</h4> <h4> {this.props.booking.appointment_type}</h4> <h4> {this.props.booking.date}</h4> <h4> {this.props.booking.time}:00</h4>
                <h4> {this.props.booking.email}</h4><h4> {this.props.booking.phone_number} </h4>
                {
                    this.props.booking.confirmed
                    ? <h4 className="booking-confirmed">   Confirmed!</h4>  
                    : this.props.booking.message
                    ? <h4 className="booking-rejected">   Rejected!</h4>
                    : <div className="buttons">
                        <button className="confirm" onClick={this.handleConfirmation}>Confirm</button>
                        <button className="reject" onClick={this.renderRejectionEmail}>Reject</button>
                    </div>
                }
            </div>
           
                {this.state.emailRejected ? <RejectionEmail  handleSubmit={this.handleSubmit} rejection={this.handleChange}/> : null}
                
            </div>
        )
    }
}