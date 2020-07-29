import React from 'react'


export default class PricesList extends React.Component{

    render(){
        return(
            <>
            <div>
               <h2 style={{ fontWeight: 'bold'}}> Hair Prices</h2>
               <h3 style={{fontWeight: 'bold'}}>Styling</h3>
               <p style={{fontStyle: 'italic', fontWeight: 'bold'}}> 
                Wash & Cut - £30
                   <br></br>
                   Wash, Cut & Blowdry - £40
                   <br></br>
                   Wash & Blowdry - £25
                   <br></br>
                   Dry cut - £25
                   <br></br>
                   Mens wash & cut - £25
                   <br></br>
                   Mens dry cut - £20
               </p>
               <h3 style={{fontWeight: 'bold'}}>Colour</h3>
               <p style={{fontStyle: 'italic', fontWeight: 'bold'}}> 
               Root colour from £35
               <br></br>
               Full head colour from £50
               <br></br>
               Full head highlights from £85
               <br></br>
               Half head highlights from £65
               <br></br>
               Highlight (T-Zone) from £45
               <br></br>
               Dip dye from £85
               <br></br>
               Balayage from £70
               <br></br>
               </p>
               <h3 style={{fontWeight: 'bold'}}>Treatments</h3>
               <p style={{fontStyle: 'italic', fontWeight: 'bold'}}> 
               Repair masque - £20
               <br></br>
               Brazilian blow dry from £80
               </p>
            </div>
            </>
        )
    }
}