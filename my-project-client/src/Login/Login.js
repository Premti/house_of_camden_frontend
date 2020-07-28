import React from 'react'
import "./Login.css"

export default class Login extends React.Component{

    state = {
        username: "",
        password: "",
        loggedIn: false
      }
    
      handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        const confiObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(this.state)
        }
        fetch("http://localhost:3000/admin", confiObj)
        .then( res => res.json())
        .then(json => this.props.signIn(json.username, json.token))
        .then(this.setState({loggedIn: true}))
      }
    
      handleSignUp = (e) => {
        e.preventDefault()
        const confiObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(this.state)}
          fetch("http://localhost:3000/sign_up", confiObj)
          .then(res => {
            debugger
            this.props.history.push('/home') 
          })
          .then(res => console.log(res))
      }

      // redirectHome = () => {
      //   const isLoggedIn = this.state.isLoggedIn
      //   if (isLoggedIn === true)
      //     {return <Redirect to="/home"}
      // }
      

    render(){
        return(
            <div className="login">
            <form onSubmit={this.handleSubmit} >
              <h4 className="h4">Welcome back! Log in to your account to view your clients</h4>
                {/* <label>Username:</label> */}
                <br></br>
                <div className="floating-label">
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
                    </div>
                    <br></br>
                    {/* <label>Password:</label> */}
                    <br></br>
                    <div className="floating-label">
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <br></br>
                
                <button type="submit" value="sign in"> sign in </button>
            </form>

           
            
            {/* <form onSubmit={this.handleSignUp}>
                <label>Username:
                    <input type="text" name="username" onChange={this.handleChange}/>
                    <br></br>
                    Password:
                    <input type="password" name="password" onChange={this.handleChange}/>
                    <br></br>
                </label>
                <input type="submit" value="sign up"/>
            </form> */}
            
            </div>
        )
    }
}