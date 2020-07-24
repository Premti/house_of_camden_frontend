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
            <>
            <div>
                <br></br>
                {this.props.booking.name} | {this.props.booking.appointment_type} | {this.props.booking.date} | {this.props.booking.time}:00
                | {this.props.booking.email} | {this.props.booking.phone_number} 
                {
                    this.props.booking.confirmed
                    ? <span>  - Confirmed!</span>  
                    : this.props.booking.message
                    ? <span>  - Rejected!</span>
                    : <>
                        <button onClick={this.handleConfirmation}>Confirm</button>
                        <button onClick={this.renderRejectionEmail}>Reject</button>
                    </>
                }
                {this.state.emailRejected ? <RejectionEmail handleSubmit={this.handleSubmit} rejection={this.handleChange}/> : null}
            </div>
            </>
        )
    }
}