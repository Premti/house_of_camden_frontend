import React from 'react'
import HairList from "./HairList"
import BeautyList from "./BeautyList"


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
            <>
            <div>
            {this.state.hairPrices ? <HairList /> : null}
                {this.state.beautyPrices ? <BeautyList /> : null}
                <br></br>
                <img src="https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/3-over-50-medium-hairstyle-with-angled-layers.jpg?w=500&ssl=1"
                alt="" onClick={this.handleHairChange}></img>
                <img src="https://i.pinimg.com/736x/ba/6f/42/ba6f42c5dbfde627d8f59cb85e381e48.jpg" alt="" onClick={this.handleBeautyChange}></img>
            </div>
            </>
        )
    }
}