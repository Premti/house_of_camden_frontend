import React from 'react'


export default class PricesCards extends React.Component{

    render(){
        return(
            
             <div class="card">
            <div class="card__inner">
          
              <div class="card__front">
                {this.props.cardFront}
               </div>
          
              <div class="card__back">
                {this.props.cardBack}
              </div>
             </div>
             
          </div>
        )
    }
}