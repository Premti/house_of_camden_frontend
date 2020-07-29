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
                    <h1>   Welcome to house of camden! </h1>
                    {/* <p style={{fontFamily: 'Optima, sans-serif', fontSize: "25px", 
                     fontStyle: 'italic', width: "70%"}}> */}
                     <p>
                    Located a few minutes away from Kings cross, Euston and right next to Morning Crescent.
                    House of Camden is a stylish grooming parlour treating both ladies and men. At their iconic home in one of the most
                    vibrant area's of London, Camden town. We offer beauty treatments and extensive hair services, bespoke for your
                    personality and style.</p>

                    
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