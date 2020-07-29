import React from 'react';
import './App.css';
import Login from "./Login/Login.js"
import {Switch, Route, Link, withRouter} from "react-router-dom"
import BookingPage from "./BookingPage/BookingPage"
import Homepage from "./Homepage/Homepage"
import Offers from "./Offers/Offers"
import Prices from "./Prices/Prices"
import CheckBookings from "./checkBookings/CheckBookings"
import AllBookings from "./checkBookings/AllBookings"
import NavBar from "./NavBar/NavBar"


class App extends React.Component{

  state = {
      loggedInAdmin: null,
      bookings: false
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

  showBookings = () => {
    this.setState({bookings: !this.state.bookings})
  }
  
  render(){

  return (
    <div className="App">
      
      
        
          <NavBar loggedInAdmin={this.state.loggedInAdmin} onClick={this.showBookings}/>
         {this.state.bookings && <BookingPage onClick={this.showBookings}/>}
         <div className={this.state.bookings && "blur"}>
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
    </div>
  );
  }
}


export default withRouter(App)