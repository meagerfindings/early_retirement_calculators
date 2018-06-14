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

    handleCoreValue = (coreValue) => {
        this.setState({core_expenses: coreValue});
    };

    handleComfortValue = (comfortValue) => {
        this.setState({comfortable_expenses: comfortValue});
    };

    static calculateInterestYears(current, future) {
        let temp = current;
        let years = 0;

        for (years; temp <= future; years++) {
            temp = (temp * .08) + temp;
            console.log(temp);
        }
        return(years)
    }

    render() {
        let nf = new Intl.NumberFormat();
        let halfFi = this.state.comfortable_expenses * 12.5;
        let leanFi = this.state.core_expenses * 25;
        let flexFi= this.state.comfortable_expenses * 20;
        let fi = this.state.comfortable_expenses * 25;
        let fatFi = this.state.comfortable_expenses * 30;

        return (
            <div>
                <h3>FI Variables/Inputs</h3>
                <div>
                    <InputForm core_expenses={this.state.core_expenses}
                               comfortable_expenses={this.state.comfortable_expenses}
                               onCoreExpense={this.handleCoreValue}
                               onComfortExpense={this.handleComfortValue}/>
                </div>
                <h3>FI Calculations</h3>
                <ListGroup>
                    <ListGroupItem>
                        <h4>Half FI: ${nf.format(halfFi)}</h4>
                        <i>12.5x comfortable expenses</i>
                        <div>
                            <p>Interest alone will carry you to Lean Fi in {AppContainer.calculateInterestYears(halfFi,leanFi)} years. <br/>
                                <i>*Assumes 8% ROI.</i>
                            </p>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h4>Lean FI: ${nf.format(leanFi)}</h4>
                        <i>25x core expenses</i>
                        <div>
                            <p>Interest alone will carry you to Flex Fi in {AppContainer.calculateInterestYears(leanFi, flexFi)} years. <br/>
                                <i>*Assumes 8% ROI.</i>
                            </p>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h4>Flex FI: ${nf.format(flexFi)}</h4>
                        <i>20x comfortable expenses</i>
                        <div>
                            <p>Interest alone will carry you to Fi in {AppContainer.calculateInterestYears(flexFi, fi)} years. <br/>
                                <i>*Assumes 8% ROI.</i>
                            </p>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h4>FI: ${nf.format(fi)}</h4>
                        <i>25x comfortable expenses</i>
                        <div>
                            <p>Interest alone will carry you to Fat Fi in {AppContainer.calculateInterestYears(fi, fatFi)} years. <br/>
                                <i>*Assumes 8% ROI.</i>
                            </p>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h4>FAT FI: ${nf.format(fatFi)}</h4>
                        <i>30x comfortable expenses</i>
                        <div>
                            <p>Interest alone will carry you to Lean Fi in {AppContainer.calculateInterestYears(halfFi,leanFi)} years. <br/>
                                <i>*Assumes 8% ROI.</i>
                            </p>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }

}

export default AppContainer
