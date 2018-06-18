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
            roi: .08,
            swr: .04,
            open: false
            }
        }

    handleExpenseInput = (value) => {
        this.setState(value)
    };

    static roundPercent(value) {
        return Math.round(value * 100 * 100)/100
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
                               roi={this.state.roi}
                               swr={this.state.swr}
                               onExpenseInput={this.handleExpenseInput}/>
                </div>
            </Collapse>
            <h3>Financial Independence Stages</h3>
            <FiStagesContainer current={this.state.current_savings}
                               core={this.state.core_expenses}
                               comfort={this.state.comfortable_expenses}
                               roi={this.state.roi}
                               swr={this.state.swr} />
            <i>*Calculated with {AppContainer.roundPercent(this.state.roi)}% ROI
                and {AppContainer.roundPercent(this.state.swr)}% SWR.</i>
        </div>
    }
}

export default AppContainer
