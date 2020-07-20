import React from 'react';
import './App.css';
import Login from "./Login.js"
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"
import Booking from "./Booking"

export default class App extends React.Component{

  state = {
    loggedInAdmin: null
  }

  signIn = (username, token) => {
    this.setState({loggedInAdmin: username})
    localStorage.token = token
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
      <h1>{this.state.loggedInAdmin ? `Welcome ${this.state.loggedInAdmin}` : "Welcome Stranger"}</h1>
      <Router>
        
          <Link to="/">House Of Camden    </Link>
          <Link to="/admin">Admin  </Link>
          <Link to="/bookings">  Bookings </Link>


        <Switch>
      <Route exact path="/admin">
      <Login 
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      signIn={this.signIn}
      />
      </Route>

      <Route path="/bookings">
        <Booking />
      </Route>
      
      </Switch>
      </Router>
    </div>
  );
  }
}

