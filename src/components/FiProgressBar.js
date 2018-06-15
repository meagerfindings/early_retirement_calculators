import React, { Component } from 'react'
import ProgressBar from "react-bootstrap/es/ProgressBar";

class FiProgressBar extends Component {
    static roundPercent(value) {
        if (value === Infinity) {
            return 0;
        } else if (isNaN(value)) {
            return 0;
        } else if (value >= 1) {
            return 100;
        } else {
            return Math.round(value * 100 * 10) / 10
        }
    }

    render(){
        let completion_amount = FiProgressBar.roundPercent(this.props.current/this.props.goal);

        let status;
        if(completion_amount === 100) status = "success"; else status = "info";

        return <div>
            <ProgressBar bsStyle={status} now={completion_amount} label={`${completion_amount}%`}/>
        </div>
    }
}

export default FiProgressBar