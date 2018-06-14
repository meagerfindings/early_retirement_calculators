import React, { Component } from 'react'
import ListGroup from "react-bootstrap/es/ListGroup";
import ListGroupItem from "react-bootstrap/es/ListGroupItem";
import FiProgressBar from "./FiProgressBar";

class FiStages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fiStages: {
                halfFi: {
                    name: "Half Fi",
                    multiplier: 12.5,
                    type: "comfort",
                    description: "12.5x comfortable expenses"
                },
                leanFi: {
                    name: "Lean Fi",
                    multiplier: 25,
                    type: "core",
                    description: "25x core expenses"
                },
                flexFi: {
                    name: "Flex Fi",
                    multiplier: 20,
                    type: "comfort",
                    description: "20x comfortable expenses"
                },
                fi: {
                    name: "Fi",
                    multiplier: 25,
                    type: "comfort",
                    description: "25x comfortable expenses"
                },
                fatFi: {
                    name: "Fat Fi",
                    multiplier: 30,
                    type: "comfort",
                    description: "30x comfortable expenses"
                }
            }
        }
    }

    calculateInterestYears(current, future) {
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

    render(){

        let nf = new Intl.NumberFormat();
        let halfFi = this.props.comfort * 12.5;
        let leanFi = this.props.core * 25;
        let flexFi= this.props.comfort * 20;
        let fi = this.props.comfort* 25;
        let fatFi = this.props.comfort* 30;

        // Calculate Interest
        let halfInterest = this.calculateInterestYears(halfFi, leanFi);
        let leanInterest = this.calculateInterestYears(leanFi, flexFi);
        let flexInterest = this.calculateInterestYears(flexFi, fi);
        let fiInterest = this.calculateInterestYears(fi, fatFi);

        return <ListGroup>
                <ListGroupItem>
                    <h4>Half FI: ${nf.format(halfFi)}</h4>
                    <i>12.5x comfortable expenses</i>
                    <FiProgressBar current={this.props.current}
                                   goal={halfFi} />
                    <div>
                        <p>Interest alone will carry you to Lean Fi in {halfInterest.years} years with
                            ${halfInterest.amount}*. <br/>
                        </p>
                    </div>
                </ListGroupItem>
                <ListGroupItem>
                    <h4>Lean FI: ${nf.format(leanFi)}</h4>
                    <i>25x core expenses</i>
                    <div>
                        <p>Interest alone will carry you to Flex Fi in {leanInterest.years} years, with
                            ${leanInterest.amount}*. <br/>
                        </p>
                    </div>
                </ListGroupItem>
                <ListGroupItem>
                    <h4>Flex FI: ${nf.format(flexFi)}</h4>
                    <i>20x comfortable expenses</i>
                    <div>
                        <p>Interest alone will carry you to Fi in {flexInterest.years} years,
                            with {flexInterest.amount}*. <br/>
                        </p>
                    </div>
                </ListGroupItem>
                <ListGroupItem>
                    <h4>FI: ${nf.format(fi)}</h4>
                    <i>25x comfortable expenses</i>
                    <div>
                        <p>Interest alone will carry you to Fat Fi in {fiInterest.years} years, with
                            ${fiInterest.amount}*. <br/>
                        </p>
                    </div>
                </ListGroupItem>
                <ListGroupItem>
                    <h4>FAT FI: ${nf.format(fatFi)}</h4>
                    <i>30x comfortable expenses</i>
                </ListGroupItem>
            </ListGroup>
    }
}

export default FiStages