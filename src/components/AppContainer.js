import React, { Component } from 'react'
import ListGroup from "react-bootstrap/es/ListGroup";
import ListGroupItem from "react-bootstrap/es/ListGroupItem";
import InputForm from "./InputForm";

class AppContainer extends Component {
    constructor(props) {
            super(props);
            this.state = {
                core_expenses: 35970,
                comfortable_expenses: 50000,
            }
    }

    handleExpenseInput = (value) => {
        this.setState(value)
    };

    static calculateInterestYears(current, future) {
        let nf = new Intl.NumberFormat();
        let temp = current;
        let years = 0;

        for (years; temp <= future; years++) {
            temp = (temp * .08) + temp;
        }
        return {
            years: years,
            amount: nf.format(temp)
        }
    }

    render() {
        let nf = new Intl.NumberFormat();
        let halfFi = this.state.comfortable_expenses * 12.5;
        let leanFi = this.state.core_expenses * 25;
        let flexFi= this.state.comfortable_expenses * 20;
        let fi = this.state.comfortable_expenses * 25;
        let fatFi = this.state.comfortable_expenses * 30;

        // Calculate Interest
        let halfInterest = AppContainer.calculateInterestYears(halfFi, leanFi);
        let leanInterest = AppContainer.calculateInterestYears(leanFi, flexFi);
        let flexInterest = AppContainer.calculateInterestYears(flexFi, fi);
        let fiInterest = AppContainer.calculateInterestYears(fi, fatFi);

        return <div>
            <h3>FI Variables/Inputs</h3>
            <div>
                <InputForm core_expenses={this.state.core_expenses}
                           comfortable_expenses={this.state.comfortable_expenses}
                           onExpenseInput={this.handleExpenseInput}/>
            </div>
            <h3>FI Calculations</h3>
            <ListGroup>
                <ListGroupItem>
                    <h4>Half FI: ${nf.format(halfFi)}</h4>
                    <i>12.5x comfortable expenses</i>
                    <div>
                        <p>Interest alone will carry you to Lean Fi in {halfInterest.years} years with
                            ${halfInterest.amount}. <br/>
                            <i>*Assumes 8% ROI.</i>
                        </p>
                    </div>
                </ListGroupItem>
                <ListGroupItem>
                    <h4>Lean FI: ${nf.format(leanFi)}</h4>
                    <i>25x core expenses</i>
                    <div>
                        <p>Interest alone will carry you to Flex Fi in {leanInterest.years} years, with
                            ${leanInterest.amount}. <br/>
                            <i>*Assumes 8% ROI.</i>
                        </p>
                    </div>
                </ListGroupItem>
                <ListGroupItem>
                    <h4>Flex FI: ${nf.format(flexFi)}</h4>
                    <i>20x comfortable expenses</i>
                    <div>
                        <p>Interest alone will carry you to Fi in {flexInterest.years} years,
                            with {flexInterest.amount}. <br/>
                            <i>*Assumes 8% ROI.</i>
                        </p>
                    </div>
                </ListGroupItem>
                <ListGroupItem>
                    <h4>FI: ${nf.format(fi)}</h4>
                    <i>25x comfortable expenses</i>
                    <div>
                        <p>Interest alone will carry you to Fat Fi in {fiInterest.years} years, with
                            ${fiInterest.amount}. <br/>
                            <i>*Assumes 8% ROI.</i>
                        </p>
                    </div>
                </ListGroupItem>
                <ListGroupItem>
                    <h4>FAT FI: ${nf.format(fatFi)}</h4>
                    <i>30x comfortable expenses</i>
                </ListGroupItem>
            </ListGroup>
        </div>
    }

}

export default AppContainer
