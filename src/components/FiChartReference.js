import React, { Component } from 'react'
import {ReferenceLine} from 'recharts';

class FiChartReference extends Component {
    render(){
        console.log(this.props.y);
        console.log(this.props.stage_expenses);
        console.log(this.props.label);
        return <ReferenceLine y={this.props.stage_expenses}
                              label={this.props.label}
                              stroke="blue"
                              strokeDasharray="3 3"
                              key={this.props.key}/>
    }
}

export default FiChartReference
