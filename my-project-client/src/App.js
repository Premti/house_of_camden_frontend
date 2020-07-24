import React from 'react';
import './App.css';
import Login from "./Login.js"
import {Switch, Route, Link, withRouter} from "react-router-dom"
import BookingPage from "./BookingPage"
import Homepage from "./Homepage"
import Offers from "./Offers"
import Prices from "./Prices"
import CheckBookings from "./CheckBookings"
import AllBookings from "./AllBookings"


class App extends React.Component{

  state = {
      loggedInAdmin: null,
  }

  signIn = (username, token) => {
    if (username && token) {
      this.setState({loggedInAdmin: username})
      localStorage.token = token
  
      this.props.history.push('/home')
    }
  }

  componentDidMount(){
    const configObj = {
      headers: {
        "Authorization" : localStorage.token
      }
    }
    if (localStorage.token){
      fetch("http://localhost:3000/validates", configObj)
      .then(res => res.json())
      .then(json => this.signIn(json.username, json.token))
    }
  }
  
  render(){

  return (
    <div className="App">
      
      
        
          <Link to="/home">House Of Camden    </Link>
          <Link to="/admin">Admin  </Link>
          <Link to="/bookings">  Bookings </Link>
          <Link to="/offers">  Offers </Link>
          <Link to="/prices">  Prices </Link>
          {this.state.loggedInAdmin && <Link to="/checkBookings">  Check bookings </Link> }
          {this.state.loggedInAdmin && <Link to="/allTheBookings">  All Bookings </Link> }
          <a href="https://www.instagram.com/houseofcamdensalon/">Instagram</a>

        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
      <Route exact path="/admin" render={routerProps => 
        <Login 
          {...routerProps}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          signIn={this.signIn}
        />
      }>
      
      </Route>

      <Route path="/bookings">
        <BookingPage />
      </Route>

      <Route path="/offers">
        <Offers />
      </Route>

      <Route path="/prices">
        <Prices />
      </Route>

      {
        this.state.loggedInAdmin &&
        <Route path="/checkBookings" render={routerProps => <CheckBookings 
          {...routerProps} 
          />} />
      }
      {
        this.state.loggedInAdmin &&
        <Route path="/allTheBookings" render={routerProps => <AllBookings 
          {...routerProps} 
          />} />
      }

      </Switch>
    </div>
  );
  }
}


export default withRouter(App)