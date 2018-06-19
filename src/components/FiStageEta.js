import React, {Component} from 'react'
import AppContainer from "./AppContainer";

class FiStageEta extends Component {

    checkIfRelevant() {
        if (this.props.current >= this.props.goal) {
            return "fi-stage-eta-false"
        } else {
            return "fi-stage-eta-true"
        }
    }

    estimateTimeRemaining(current, goal, deposit){
        if (this.checkIfRelevant() === "fi-stage-eta-false") {
            return null
        }

        let months = 0;
        let temp = current;

        if (temp < goal) {
            for (months; temp < goal; months++) {
                temp = temp + deposit;

                temp = temp + (temp * (this.props.roi/12));
            }

            return <div>
                {AppContainer.monthsAndYears(months)}.
            </div>
        }
    }


    render(){
        return <div className={this.checkIfRelevant()}>
            With your present savings rate you may reach this stage in {this.estimateTimeRemaining(this.props.current, this.props.goal, this.props.monthly_savings)}
        </div>
    }
}

export default FiStageEta