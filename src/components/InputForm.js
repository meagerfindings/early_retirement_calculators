import React, { Component } from 'react'
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";
import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/es/Row";
import Grid from "react-bootstrap/es/Grid";
import OverlayTrigger from "react-bootstrap/es/OverlayTrigger";
import Tooltip from "react-bootstrap/es/Tooltip";
import Alert from "react-bootstrap/es/Alert";

class InputForm extends Component {

    handleInput = (e) => {
        if (e.target.value !== "0" && e.target.value !== "") { // prevents empty strings and 0's from being entered, causing the app to crash
            let value = e.target.value * 100 / 100; // this prevents the input from becoming a string...
            this.props.onExpenseInput({[e.target.name]: value})
        }
    };

    handlePercentageInput = (e) => {
        if (e.target.value !== "0" && e.target.value !== "") { // prevents empty strings and 0's from being entered, causing the app to crash
            let value = e.target.value / 100;
            this.props.onExpenseInput({[e.target.name]: value})
        }
    };

    static tooltip(input) {
        return (
            <Tooltip id="tooltip">
                {input}
            </Tooltip>
        )
    }

    alertSWR() {
        let warnings = [];
        if (this.props.swr > .04) {
            warnings.push(
                <Alert bsStyle="danger" key={"swr_warning"}>
                    <strong>Potentially Unsafe Withdrawal Rate!</strong>
                    <br/>
                    Withdrawal Rates above 4% have the potential to deplete your portfolio at an increased rate. More information <a href="https://www.madfientist.com/safe-withdrawal-rate/"
                                                                                                                                     target="blank">here</a>.
                </Alert>
            )
        }
        return warnings
    }

    render(){
        let nf = new Intl.NumberFormat();

        return <Grid>
            <form className="input-form-container">
                <FormGroup controlId="formBasicText">
                    <Row>
                        <Col md={6} lg={6}>
                        <ControlLabel>Annual Core Expenses</ControlLabel>
                            <OverlayTrigger placement="bottom"
                                            overlay={
                                                InputForm.tooltip("Enter your annual core expense amount, non-discretionary spending.")
                                            }>
                                <FormControl type="number"
                                             name='core_expenses'
                                             placeholder={"Initial Assumption: $" + nf.format(this.props.core_expenses) + " yearly"}
                                             onChange={this.handleInput}/>
                            </OverlayTrigger>
                        </Col>
                        <Col md={6} lg={6}>
                            <ControlLabel>Annual Comfortable Expenses</ControlLabel>
                                <OverlayTrigger placement="bottom"
                                                overlay={
                                                    InputForm.tooltip("Enter your annual comfortable expense amount. This includes your discretionary spending.")
                                                }>
                                    <FormControl type="number"
                                                 name='comfortable_expenses'
                                                 placeholder={"Initial Assumption: $" + nf.format(this.props.comfortable_expenses) + " yearly"}
                                                 onChange={this.handleInput}/>
                                </OverlayTrigger>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md={6} lg={6}>
                            <ControlLabel>Current Investments</ControlLabel>
                                <OverlayTrigger placement="bottom"
                                                overlay={
                                                    InputForm.tooltip("Enter your current savings or net worth.")
                                                }>
                                    <FormControl type="number"
                                                 name='current_savings'
                                                 placeholder={"Initial Assumption: $" + nf.format(this.props.current_savings) + " invested"}
                                                onChange={this.handleInput}/>
                                </OverlayTrigger>
                        </Col>
                        <Col md={6} lg={6}>
                            <ControlLabel>Monthly Investments</ControlLabel>
                                <OverlayTrigger placement="bottom"
                                                overlay={
                                                    InputForm.tooltip("Enter the amount you add to your portfolio each month.")
                                                }>
                                    <FormControl type="number"
                                                 name='monthly_savings'
                                                 placeholder={"Initial Assumption: $" + nf.format(this.props.monthly_savings) + " monthly"}
                                                 onChange={this.handleInput}/>
                                </OverlayTrigger>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md={6} lg={6}>
                            <ControlLabel>Rate of Return on Investments %</ControlLabel>
                                <OverlayTrigger placement="bottom"
                                                overlay={
                                                    InputForm.tooltip("Enter preferred Rate of Return on Investments.")
                                                }>
                                    <FormControl type="number"
                                                 name='roi'
                                                 placeholder={"Initial Assumption: " + nf.format(this.props.roi*100) + "% yearly"}
                                                 onChange={this.handlePercentageInput}/>
                                </OverlayTrigger>
                        </Col>
                        <Col md={6} lg={6}>
                            <ControlLabel>Safe Withdrawal Rate %</ControlLabel>
                                <OverlayTrigger placement="bottom"
                                                overlay={
                                                    InputForm.tooltip("Enter preferred Safe Withdrawal Rate.")
                                                }>
                                    <FormControl type="number"
                                                 name='swr'
                                                 placeholder={"Initial Assumption: " + nf.format(this.props.swr*100) + "% yearly"}
                                                 onChange={this.handlePercentageInput}/>
                                </OverlayTrigger>
                            {this.alertSWR()}
                        </Col>
                    </Row>
                </FormGroup>
            </form>
        </Grid>
    }
}

export default InputForm