import React, { Component } from 'react'
import FiProgressBar from "./FiProgressBar";
import Col from "react-bootstrap/es/Col";
import SafeWithdrawalRate from "./SafeWithdrawalRate";
import AppContainer from "./AppContainer";
import FiStageEta from "./FiStageEta";

class FiStage extends Component {

    calculateInterestTime(current, future) {
        let nf = new Intl.NumberFormat();
        let temp = current;
        let months = 1;
        if (current > 0 && future > 0) {
            if (typeof current === "undefined" || typeof current === "undefined") {
            } else {
                for (months; temp <= future; months++) {
                    temp = (temp * (this.props.roi / 12)) + temp;
                }
            }
        }

        return {
            months: months,
            amount: nf.format(Math.round(temp))
        }
    }

    render(){
        let nf = new Intl.NumberFormat();
        let stage_amount = this.props.stage_amount;
        let stage_interest = this.calculateInterestTime(stage_amount, this.props.next_stage.amount);

        return <Col md={6} lg={6}>
            <div className="fi-Single-Stage">
                <h3>{this.props.name}: ${nf.format(stage_amount)}</h3>
                <i>{this.props.description}</i>
                <div className={"fi-stage-swr-" + this.props.swr_display}>
                    <SafeWithdrawalRate stage_amount={stage_amount}
                                        swr={this.props.swr} />
                </div>
                <div className={"fi-stage-progress-bar-" + this.props.progress_display}>
                    <br/>
                    <b>Current Progress towards {this.props.name}:</b>
                    <FiProgressBar current={this.props.current}
                                   goal={stage_amount} />
                    <FiStageEta current={this.props.current}
                                goal={stage_amount}
                                monthly_savings={this.props.monthly_savings}
                                roi={this.props.roi} />
                </div>
                <br/>
                <div className={"fi-stage-growth-to-next-" + this.props.growth_to_next_display}>
                    <b>Passively reaching the next stage:</b>
                    <p>Once at {this.props.name}, your investments may carry you to {this.props.next_stage.name} in {AppContainer.monthsAndYears(stage_interest.months)} resulting in
                        ${stage_interest.amount}. <br/>
                    </p>
                </div>
            </div>
        </Col>
    }
}

export default FiStage