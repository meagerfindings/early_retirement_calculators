import React, { Component } from 'react'
import InputForm from "./InputForm";
import FiStagesContainer from "./FiStagesContainer";
import Tabs from "react-bootstrap/es/Tabs";
import Tab from "react-bootstrap/es/Tab";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            core_expenses: 36000,
            comfortable_expenses: 50000,
            current_savings: 30000,
            roi: .08,
            swr: .04
            }
        }

    handleExpenseInput = (value) => {
        this.setState(value)
    };

    static roundPercent(value) {
        return Math.round(value * 100 * 100)/100
    }

    render(){
        return <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="Fi Stages">
                <h3>Financial Independence Stages</h3>
                <FiStagesContainer current={this.state.current_savings}
                                   core={this.state.core_expenses}
                                   comfort={this.state.comfortable_expenses}
                                   roi={this.state.roi}
                                   swr={this.state.swr} />
                <i>*Calculated with {AppContainer.roundPercent(this.state.roi)}% ROI
                    and {AppContainer.roundPercent(this.state.swr)}% SWR.</i>
            </Tab>
            <Tab eventKey={2} title="Customize">
                <h3>FI Variables/Inputs</h3>
                <InputForm core_expenses={this.state.core_expenses}
                           comfortable_expenses={this.state.comfortable_expenses}
                           current_savings={this.state.current_savings}
                           roi={this.state.roi}
                           swr={this.state.swr}
                           onExpenseInput={this.handleExpenseInput}/>
            </Tab>
        </Tabs>
    }
}

export default AppContainer
