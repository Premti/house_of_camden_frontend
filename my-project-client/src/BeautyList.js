import React from 'react'


export default class BeautyList extends React.Component{

    render(){
        return(
            
            <div>
                <h2 style={{fontWeight: 'bold'}}>Beauty Treatments</h2>
                <h4 style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Ladies legs</h4>
               
                    <h5 style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                    Half leg wax - £18
                    <br></br>
                    3/4 leg wax - £20
                    <br></br>
                    Full leg wax - £30
                    <br></br>
                    Hollywood wax with hot wax - £35 or strip wax - £25 
                    <br></br>
                    Brazilian wax with hot wax - £30 or strip wax - £20 
                    <br></br>
                    Buttocks with hot wax £15
                   
                    
                    <h4 style={{ fontWeight: 'bold', textDecorationLine: 'underline'}}> Arms & underarms</h4>
                        Underarm with hot wax - £10 or strip wax - £8
                        <br></br>
                        Half arms - £18
                        <br></br>
                        3/4 arms - £20
                        <br></br>
                        Full arms - £25
                        <br></br>
                        <h4 style={{ fontWeight: 'bold', textDecorationLine: 'underline'}}> Facial waxing</h4>
                            Upper lip wax - £6
                            <br></br>
                            Chin wax - £6
                            <br></br>
                            Sides - £8
                            <br></br>
                            Full face including eyebrows - £20
                  
                        <h4 style={{ fontWeight: 'bold', textDecorationLine: 'underline'}}> Eyebrow, Eyelash & Facial treatments </h4>
                        <p style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                            Eyebrow wax or threading £6
                            <br></br>
                            Eyebrow tinting - £8
                            <br></br>
                            Eyelash tinting - £10
                            <br></br>
                            High definition eyebrows - £15
                            <br></br>
                            LVL Eyelashes  - £35
                            <br></br>
                            Deep cleanse, exfoliate, mask, massage - £45
                            </p>
                            </h5>
               
            </div>
        )
    }
}