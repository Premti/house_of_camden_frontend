import React from 'react'


export default class RejectionEmail extends React.Component{

    

    
    render(){
        return(
            <form className="rejection-email" onSubmit={this.props.handleSubmit}>
            <textarea placeholder="Write email here..." onChange={(e) => this.props.rejection(e)}></textarea>
            <button >Send</button>
            </form>
           
        )
    }
}