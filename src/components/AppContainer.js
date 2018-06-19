import React, { Component } from 'react'
import InputForm from "./InputForm";
import FiStagesContainer from "./FiStagesContainer";
import Collapse from "react-bootstrap/es/Collapse";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            core_expenses: 36000,
            comfortable_expenses: 50000,
            current_savings: 30000,
            roi: .07,
            swr: .04,
            open: true,
            monthly_savings: 500,
            }
        }

    handleExpenseInput = (value) => {
        this.setState(value)
    };

    static roundPercent(value) {
        return Math.round(value * 100 * 100)/100
    }

    static monthsAndYears(months) {
        let year_string = '';
        let month_string = '';
        let and = '';

        let years = (months - (months % 12)) / 12;
        months = months % 12;

        if (years === 1) {
            year_string = "1 year"
        } else if (years > 1) {
            year_string = years + " years"
        }

        if (months === 1) {
            month_string = "1 month"
        } else if (months > 1) {
            month_string = months + " months"
        }

        if (years > 0 && months > 0){
            and = ' and ';
        }

        return <i>
            {year_string + and + month_string}
        </i>
    }

    render(){
        return <div>

            <span className="editLink" onClick={() => this.setState({ open: !this.state.open })}>
                <i>Edit Variables and Inputs</i>
            </span>
            <Collapse in={this.state.open}>
                <div>
                    <InputForm core_expenses={this.state.core_expenses}
                               comfortable_expenses={this.state.comfortable_expenses}
                               current_savings={this.state.current_savings}
                               monthly_savings={this.state.monthly_savings}
                               roi={this.state.roi}
                               swr={this.state.swr}
                               onExpenseInput={this.handleExpenseInput}/>
                </div>
            </Collapse>
            <h3>Financial Independence Stages</h3>
            <FiStagesContainer current={this.state.current_savings}
                               core={this.state.core_expenses}
                               comfort={this.state.comfortable_expenses}
                               monthly_savings={this.state.monthly_savings}
                               roi={this.state.roi}
                               swr={this.state.swr} />
            <i>*Calculated with {AppContainer.roundPercent(this.state.roi)}% ROI
                and {AppContainer.roundPercent(this.state.swr)}% SWR.</i>
        </div>
    }
}

export default AppContainer
