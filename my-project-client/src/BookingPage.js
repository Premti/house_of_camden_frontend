import React from 'react'
import BookingComplete from "./BookingComplete"

export default class BookingPage extends React.Component{

    state = {
        date: "",
        name: "",
        email: "",
        phone_number: "",
        time: "",
        appointment_type: "",
        bookingComplete: false
    }

    handleDateChange = (e) => {
        this.setState({date: e.target.value})
    }

    handleInfoChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitInfo = (e) => {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
          }
          fetch("http://localhost:3000/bookings", configObj)
          .then(res => res.json())
          .then(json => console.log(json))
          .then(this.setState({bookingComplete : true}))
    }


    render(){
        return(
            <>
                <br></br>
                <form onSubmit={this.submitInfo }>
            <label htmlFor="start">  <strong>Calender:</strong></label>
            
                <input
                type="date"
                id="start"
                name="date"
                value={this.state.date}
                min=""
                max=""
                onChange={e => this.handleDateChange(e)}
                        >
            </input>
            <br></br>
            <label>
                    Name:
                        <input type="text" name="name" onChange={this.handleInfoChange}/>
                        <br></br>
                    Email:
                        <input type="text" name="email" onChange={this.handleInfoChange}/>
                        <br></br>
                    Phone number:
                        <input type="text" name="phone_number" onChange={this.handleInfoChange}/>
                    <br></br>
                    Time:
                    <select defaultValue="DEFAULT" type="text" name="time" onChange={this.handleInfoChange}>
                    <option value="DEFAULT" disabled>Select time</option>
                        <option >10.00</option>
                        <option >11.00</option>
                        <option >12.00</option>
                        <option >13.00</option>
                        <option >14.00</option>
                        <option >15.00</option>
                        <option >16.00</option>
                        <option >17.00</option>
                        <option >18.00</option>
                    </select>
                    <br></br>
                    Appointment Type:
                    <select defaultValue="DEFAULT" type="text" name="appointment_type" onChange={this.handleInfoChange}>
                        <option value="DEFAULT" disabled>Select appointment</option>
                        <option >Haircut</option>
                        <option >Nails</option>
                        <option >Manicure</option>
                        <option >Wax</option>
                    </select>
                    <br></br>
                </label>
                <input placeholder="select appointment" type="submit" value="submit" />
                </form>
                {this.state.bookingComplete ? <BookingComplete bookingInfo={this.state}/> : null}
            

            </>
        )
    }
}