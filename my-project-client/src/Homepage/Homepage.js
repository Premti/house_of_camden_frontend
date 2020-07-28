import React from 'react'
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"
import image4 from "../assets/4.png"
import "./Homepage.css"

export default class Homepage extends React.Component{



    render(){
        return(
            
            <div className="homepage">
                <div className="info">
                    info
                </div>
                <div className="images">
                    <img src={image1} alt=""/> 
                    <img src={image2} alt=""/> 
                    <img src={image3} alt=""/> 
                    <img src={image4} alt=""/> 
                </div>
            </div>
          
        )
    }
}