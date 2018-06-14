import React, { Component } from 'react'
import ListGroupItem from "react-bootstrap/es/ListGroupItem";
import FiProgressBar from "./FiProgressBar";

class FiStage extends Component {

    calculateInterestYears(current, future) {
        let nf = new Intl.NumberFormat();
        let temp = current;
        let years = 0;

        for (years; temp <= future; years++) {
            temp = (temp * .08) + temp;
        }

        return {
            years: years,
            amount: nf.format(Math.round(temp))
        }
    }

    render(){
        let nf = new Intl.NumberFormat();

        let stage_type = this.props.type;
        let next_stage_type = this.props.next_stage.type;

        let stage_expenses;
        if (stage_type === 'core'){
            stage_expenses = this.props.core;
        } else {
            stage_expenses = this.props.comfort;
        }

        let next_expenses;

        if (next_stage_type === 'core'){
            next_expenses = this.props.core;
        } else {
            next_expenses = this.props.comfort;
        }

        let stage_amount = stage_expenses * this.props.multiplier;
        let next_stage_amount = next_expenses * this.props.next_stage.multiplier;
        let stage_interest = this.calculateInterestYears(stage_amount, next_stage_amount);

        return <ListGroupItem>
            <h4>{this.props.name}: ${nf.format(stage_amount)}</h4>
            <i>{this.props.description}</i>
            <div>
                <h5>Goal Progress:</h5>
                <FiProgressBar current={this.props.current}
                               goal={next_stage_amount} />
            </div>
            <div>
                <p>Once at {this.props.name}, your investments would carry you to {this.props.next_stage.name} in {stage_interest.years} years with
                    ${stage_interest.amount}*. <br/>
                </p>
            </div>
        </ListGroupItem>
    }
}

export default FiStage