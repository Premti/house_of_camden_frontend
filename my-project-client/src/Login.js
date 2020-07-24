import React from 'react'

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
            <>
            <form onSubmit={this.handleSubmit} >
                <label>Username:
                    <input type="text" name="username" onChange={this.handleChange}/>
                    <br></br>
                    Password:
                    <input type="password" name="password" onChange={this.handleChange}/>
                    <br></br>
                </label>
                <input type="submit" value="sign in"/>
            </form>

           
            
            <form onSubmit={this.handleSignUp}>
                <label>Username:
                    <input type="text" name="username" onChange={this.handleChange}/>
                    <br></br>
                    Password:
                    <input type="password" name="password" onChange={this.handleChange}/>
                    <br></br>
                </label>
                <input type="submit" value="sign up"/>
            </form>
            
            </>
        )
    }
}