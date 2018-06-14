import React, { Component } from 'react'
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";

class InputForm extends Component {

    handleCoreInput = (e) => {
        let core_value = e.target.value;
        this.props.onCoreExpense(core_value);
    };

    handleComfortInput = (e) => {
        let comfort_value = e.target.value;
        this.props.onComfortExpense(comfort_value);
    };

    render(){
        let nf = new Intl.NumberFormat();
        return (
            <form>
                <FormGroup controlId="formBasicText">
                    <ControlLabel>Annual Core Expenses</ControlLabel>
                    <FormControl type="number"
                                 name='core'
                                 placeholder={"Enter your annual core expense amount, non-discretionary spending. (Initial Assumption: $" + nf.format(this.props.core_expenses) + ")"}
                                 onChange={this.handleCoreInput} />
                    <ControlLabel>Annual Comfortable Expenses</ControlLabel>
                    <FormControl type="dollars"
                                 name='comfort'
                                 placeholder={"Enter your annual comfortable expense amount. This includes your discretionary spending. (Initial Assumption: $" + nf.format(this.props.comfortable_expenses) + ")"}
                                 onChange={this.handleComfortInput} />
                </FormGroup>
            </form>
        )
    }
}

export default InputForm