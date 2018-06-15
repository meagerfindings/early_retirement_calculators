import React, { Component } from 'react'
import ListGroupItem from "react-bootstrap/es/ListGroupItem";
import FiProgressBar from "./FiProgressBar";

class FiStage extends Component {

    calculateInterestYears(current, future) {
        let nf = new Intl.NumberFormat();
        let temp = current;
        let years = 0;

        for (years; temp <= future; years++) {
            temp = (temp * this.props.roi) + temp;
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
            <h3>{this.props.name}: ${nf.format(stage_amount)}</h3>
            <i>{this.props.description}</i>
            <div className={"fi-stage-swr-" + this.props.swr_display}>
                <p>Annual safe withdrawal rate: ${
                    nf.format(Math.round(stage_amount * this.props.swr))
                }
                </p>
            </div>
            <div className={"fi-stage-progress-bar-" + this.props.progress_display}>
                <br/>
                <b>Current Progress towards {this.props.name}:</b>
                <FiProgressBar current={this.props.current}
                               goal={stage_amount} />
            </div>
            <div className={"fi-stage-growth-to-next-" + this.props.growth_to_next_display}>
                <b>Reaching the next stage:</b>
                <p>Once at {this.props.name}, your investments would carry you to {this.props.next_stage.name} in {stage_interest.years} years with
                    ${stage_interest.amount}. <br/>
                </p>
            </div>
        </ListGroupItem>
    }
}

export default FiStage