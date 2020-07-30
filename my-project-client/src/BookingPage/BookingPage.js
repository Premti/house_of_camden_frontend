import React from 'react'
import "./BookingPage.css"

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
          .then(data => this.props.onClick())
    }


    render(){
        return(
            <div className="booking">
                <span className="x" onClick={() => this.props.onClick()}>x</span>
                <br></br>
                
                <form onSubmit={this.submitInfo }>
            <label htmlFor="start"> </label>
            
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
                    
                        <input type="text" name="name" placeholder="Name" onChange={this.handleInfoChange}/>
                        <br></br>
                   
                        <input type="text" name="email" placeholder="Email" onChange={this.handleInfoChange}/>
                        <br></br>
                    
                        <input type="text" name="phone_number" placeholder="Phone number" onChange={this.handleInfoChange}/>
                    <br></br>
                    
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
                    
                    <select defaultValue="DEFAULT" type="text" name="appointment_type" onChange={this.handleInfoChange}>
                        <option value="DEFAULT" disabled>Select appointment</option>
                        <option >3/4 arms </option>
                        <option >3/4 leg wax </option>
                        <option >Balayage </option>
                        <option >Bikini line wax </option>
                        <option >Brazilian blow dry </option>
                        <option >Brazilian wax - strip </option>
                        <option >Brazilian wax - hot wax </option>
                        <option >Buttocks with hot wax </option>
                        <option >Chin wax </option>
                        <option >Deep cleanse, exfoliate, mask & massage </option>
                        <option >Dip dye </option>
                        <option >Dry cut</option>
                        <option >Eyebrow thread </option>
                        <option >Eyebrow tinting </option>
                        <option >Eyelash tinting </option>
                        <option >Eyebrow wax </option>
                        <option >Full arms </option>
                        <option >Full face including eyebrows </option>
                        <option >Full head colour </option>
                        <option >Full leg wax </option>
                        <option >Half leg wax </option>
                        <option >Half arms </option>
                        <option >High definition eyebrows </option>
                        <option >Highlight (full head) </option>
                        <option >Highlight (half head) </option>
                        <option >Highlight (T-zone) </option>
                        <option >Hollywood wax - hot wax </option>
                        <option >Hollywood wax - strip </option>
                        <option >LVL eyelash </option>
                        <option >Mens cut</option>
                        <option >Mens wash & cut</option>
                        <option >Repair Masque </option>
                        <option >Root colour</option>
                        <option >Side face wax </option>
                        <option >Underarm - hot wax </option>
                        <option >Upper lip wax </option>
                        <option >Underarm - strip </option>
                        <option >Wash & blowdry</option>
                        <option >Wash, cut & blowdry</option>
                        <option >Wash & cut</option>
                    </select>
                    <br></br>
                </label>
                <button placeholder="select appointment" type="submit" > Book </button>
                </form>
            

            </div>
        )
    }
}