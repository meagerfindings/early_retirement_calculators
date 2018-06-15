import React, { Component } from 'react'
import InputForm from "./InputForm";
import FiStagesContainer from "./FiStagesContainer";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            core_expenses: 36000,
            comfortable_expenses: 50000,
            current_savings: 0,
            }
        }

    handleExpenseInput = (value) => {
        this.setState(value)
    };

    render(){
        return <div>
            <h3>FI Variables/Inputs</h3>
            <div>
                <InputForm core_expenses={this.state.core_expenses}
                           comfortable_expenses={this.state.comfortable_expenses}
                           onExpenseInput={this.handleExpenseInput}/>
            </div>
            <h3>FI Calculations</h3>
            <FiStagesContainer current={this.state.current_savings}
                               core={this.state.core_expenses}
                               comfort={this.state.comfortable_expenses} />
            <i>*Assumes 8% ROI.</i>
        </div>
    }
}

export default AppContainer
