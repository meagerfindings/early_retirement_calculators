import React, { Component } from 'react'
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";

class InputForm extends Component {

    handleInput = (e) => {
        this.props.onExpenseInput({[e.target.name]: e.target.value})
    };

    handlePercentageInput = (e) => {
        let value = e.target.value / 100;
        this.props.onExpenseInput({[e.target.name]: value})
    };

    render(){
        let nf = new Intl.NumberFormat();
        return <form>
            <FormGroup controlId="formBasicText">
                <ControlLabel>Annual Core Expenses</ControlLabel>
                <FormControl type="number"
                             name='core_expenses'
                             // defaultValue={this.props.core_expenses}
                             placeholder={"Enter your annual core expense amount, non-discretionary spending. (Initial Assumption: $" + nf.format(this.props.core_expenses) + ")"}
                             onChange={this.handleInput}/>
                <br/>
                <ControlLabel>Annual Comfortable Expenses</ControlLabel>
                <FormControl type="number"
                             name='comfortable_expenses'
                             placeholder={"Enter your annual comfortable expense amount. This includes your discretionary spending. (Initial Assumption: $" + nf.format(this.props.comfortable_expenses) + ")"}
                             onChange={this.handleInput}/>
                <br/>
                <ControlLabel>Current Savings</ControlLabel>
                <FormControl type="number"
                             name='current_savings'
                             placeholder={"Enter your current savings or net worth. (Initial Assumption: $" + nf.format(this.props.current_savings) + ")"}
                             onChange={this.handleInput}/>
                <br/>
                <ControlLabel>Rate of Return on Investments %</ControlLabel>
                <FormControl type="number"
                             name='roi'
                             placeholder={"Enter preferred Rate of Return on Investments. (Initial Assumption: " + nf.format(this.props.roi*100) + "%)"}
                             onChange={this.handlePercentageInput}/>
                <br/>
                <ControlLabel>Safe Withdrawal Rate %</ControlLabel>
                <FormControl type="number"
                             name='swr'
                             placeholder={"Enter preferred Safe Withdrawal Rate. (Initial Assumption: " + nf.format(this.props.swr*100) + "%)"}
                             onChange={this.handlePercentageInput}/>
            </FormGroup>
        </form>
    }
}

export default InputForm