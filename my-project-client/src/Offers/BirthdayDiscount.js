import React from 'react'
import image1 from "../assets/8.png"


export default class BirthdayDiscount extends React.Component{

    render(){
        return(
            <>
            <div className="loyalty-info">
                10% off
            </div>
            <div className="image1">
                <img src={image1}></img>
                </div>   
                </>      
        )
    }
}