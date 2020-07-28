import React from 'react'
import HairList from "../HairList"
import BeautyList from "../BeautyList"
import pic1 from "../assets/5.png"
import pic2 from "../assets/6.png"
import "./Prices.css"
import PricesCard from './PricesCard'

export default class Prices extends React.Component{

    state = {
        hairPrices : false,
        beautyPrices : false
    }

    handleHairChange = () => {
        this.setState({hairPrices: true,
        beautyPrices : false
    })
    }

    handleBeautyChange = () => {
        this.setState({hairPrices: false,
        beautyPrices : true
    })
    }

    render(){
        return(
            <div className="prices">
                <PricesCard cardBack={<HairList />} cardFront={<img src={pic2} alt=""/>}/>
                <PricesCard cardBack={<BeautyList />} cardFront={<img src={pic1} alt=""/>}/>
          </div>
        )
    }
}