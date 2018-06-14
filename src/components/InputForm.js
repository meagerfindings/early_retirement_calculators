import React, { Component } from 'react'
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";

class InputForm extends Component {
    //TODO: Figure out why backspace in Input Form fields freezes browser and without any DevConsole errors.
    //TODO: Add adjustable ROI.

    handleInput = (e) => {
        this.props.onExpenseInput({[e.target.name]: e.target.value})
    };

    render(){
        let nf = new Intl.NumberFormat();
        return <form>
            <FormGroup controlId="formBasicText">
                <ControlLabel>Annual Core Expenses</ControlLabel>
                <FormControl type="number"
                             name='core_expenses'
                             placeholder={"Enter your annual core expense amount, non-discretionary spending. (Initial Assumption: $" + nf.format(this.props.core_expenses) + ")"}
                             onChange={this.handleInput}/>
                <ControlLabel>Annual Comfortable Expenses</ControlLabel>
                <FormControl type="number"
                             name='comfortable_expenses'
                             placeholder={"Enter your annual comfortable expense amount. This includes your discretionary spending. (Initial Assumption: $" + nf.format(this.props.comfortable_expenses) + ")"}
                             onChange={this.handleInput}/>
                <ControlLabel>Current Savings</ControlLabel>
                <FormControl type="number"
                             name='current_savings'
                             placeholder={"Enter your current savings or net worth."}
                             onChange={this.handleInput}/>
            </FormGroup>
        </form>
    }
}

export default InputForm