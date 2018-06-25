import React, { Component } from 'react'
import InputForm from "./InputForm";
import FiStagesContainer from "./FiStagesContainer";
import Collapse from "react-bootstrap/es/Collapse";
import InformationModal from "./InformationModal";
import {Button,Modal} from "react-bootstrap";

class AppContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            core_expenses: 36000,
            comfortable_expenses: 50000,
            current_savings: 30000,
            roi: .07,
            swr: .04,
            input_open: false,
            info_modal_open: false,
            monthly_savings: 3000,
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

    handleClose() {
        this.setState({ info_modal_open: false });
    }

    handleShow() {
        this.setState({ info_modal_open: true });
    }

    render(){
        return <div>
            <i className="editLink" onClick={() => this.setState({ input_open: !this.state.input_open })}>
             Edit Variables and Inputs</i>
            <i className={"more-info-link"} onClick={this.handleShow}>What is FI?</i>

            <Collapse in={this.state.input_open}>
                <div>  {/*necessary for collapse to work*/}
                    <br/>
                    <InputForm core_expenses={this.state.core_expenses}
                               comfortable_expenses={this.state.comfortable_expenses}
                               current_savings={this.state.current_savings}
                               monthly_savings={this.state.monthly_savings}
                               roi={this.state.roi}
                               swr={this.state.swr}
                               onExpenseInput={this.handleExpenseInput}/>
                </div>
            </Collapse>

            <Modal show={this.state.info_modal_open} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>A quick introduction to FI</Modal.Title>
                </Modal.Header>
                <InformationModal/>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            <br/>
            <h3>Financial Independence Stages</h3>
            <FiStagesContainer current={this.state.current_savings}
                               core={this.state.core_expenses}
                               comfort={this.state.comfortable_expenses}
                               monthly_savings={this.state.monthly_savings}
                               roi={this.state.roi}
                               swr={this.state.swr} />
        </div>
    }
}

export default AppContainer
