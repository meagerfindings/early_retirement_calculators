import React, { Component } from 'react'
import ProgressBar from "react-bootstrap/es/ProgressBar";

class FiProgressBar extends Component {
    render(){
        let completion_amount = Math.round((this.props.current/this.props.goal)*100);
        return <div>
            <ProgressBar now={completion_amount} label={`${completion_amount}%`}/>
        </div>
    }
}

export default FiProgressBar