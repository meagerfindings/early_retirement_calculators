import React, { Component } from 'react'
import ListGroup from "react-bootstrap/es/ListGroup";
import FiStage from "./FiStage";

class FiStagesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fiStages: {
                coreFreedom: {
                    id: 'coreFreedom',
                    name: 'Core Freedom',
                    multiplier: 3,
                    type: 'core',
                    description: '3x core expenses, AKA F-You Money. 2-3 years of expenses covered.',
                    nextStage: 'comfortFreedom'
                },
                comfortFreedom: {
                    id: 'comfortFreedom',
                    name: 'Comfort Freedom',
                    multiplier: 3,
                    type: 'comfort',
                    description: '3x comfort expenses, AKA F-You Money. 2-3 years of expenses covered.',
                    nextStage: 'halfFi'
                },
                halfFi: {
                    id: 'halfFi',
                    name: "Half Fi",
                    multiplier: 12.5,
                    type: "comfort",
                    description: "12.5x comfortable expenses",
                    nextStage: 'leanFi'
                },
                leanFi: {
                    id: 'leanFi',
                    name: "Lean Fi",
                    multiplier: 25,
                    type: "core",
                    description: "25x core expenses",
                    nextStage: 'flexFi'
                },
                flexFi: {
                    id: 'flexFi',
                    name: "Flex Fi",
                    multiplier: 20,
                    type: "comfort",
                    description: "20x comfortable expenses",
                    nextStage: 'fi'
                },
                fi: {
                    id: 'fi',
                    name: "Fi",
                    multiplier: 25,
                    type: "comfort",
                    description: "25x comfortable expenses",
                    nextStage: 'fatFi'
                },
                fatFi: {
                    id: 'fatFi',
                    name: "Fat Fi",
                    multiplier: 30,
                    type: "comfort",
                    description: "30x comfortable expenses",
                    nextStage: 'fatFi'
                }
            }
        }
    }

    //TODO: ability to not display Fat Fi next goal information.

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

    createStages() {
        let stages = this.state.fiStages;
        let stage_array = [];
        let index = 1;

        for(let key in stages) {

            let stage = stages[key];

            stage_array.push(<FiStage key={stage.id + index}
                                      name={stage.name}
                                      type={stage.type}
                                      description={stage.description}
                                      multiplier={stage.multiplier}
                                      next_stage={stages[stage.nextStage]}
                                      current={this.props.current}
                                      core={this.props.core}
                                      comfort={this.props.comfort}/>);
            index ++
        }
        return stage_array
    }

    render(){

        // let nf = new Intl.NumberFormat();
        // let halfFi = this.props.comfort * 12.5;
        // let leanFi = this.props.core * 25;
        // let flexFi= this.props.comfort * 20;
        // let fi = this.props.comfort* 25;
        // let fatFi = this.props.comfort* 30;

        // Calculate Interest
        // let halfInterest = this.calculateInterestYears(halfFi, leanFi);
        // let leanInterest = this.calculateInterestYears(leanFi, flexFi);
        // let flexInterest = this.calculateInterestYears(flexFi, fi);
        // let fiInterest = this.calculateInterestYears(fi, fatFi);

        return <ListGroup>
            {this.createStages()}

            {/*<ListGroupItem>*/}
                {/*<h4>Half FI: ${nf.format(halfFi)}</h4>*/}
                {/*<i>12.5x comfortable expenses</i>*/}
                {/*<FiProgressBar current={this.props.current}*/}
                               {/*goal={halfFi} />*/}
                {/*<div>*/}
                    {/*<p>Interest alone will carry you to Lean Fi in {halfInterest.years} years with*/}
                        {/*${halfInterest.amount}*. <br/>*/}
                    {/*</p>*/}
                {/*</div>*/}
            {/*</ListGroupItem>*/}
            {/*<ListGroupItem>*/}
                {/*<h4>Lean FI: ${nf.format(leanFi)}</h4>*/}
                {/*<i>25x core expenses</i>*/}
                {/*<div>*/}
                    {/*<p>Interest alone will carry you to Flex Fi in {leanInterest.years} years, with*/}
                        {/*${leanInterest.amount}*. <br/>*/}
                    {/*</p>*/}
                {/*</div>*/}
            {/*</ListGroupItem>*/}
            {/*<ListGroupItem>*/}
                {/*<h4>Flex FI: ${nf.format(flexFi)}</h4>*/}
                {/*<i>20x comfortable expenses</i>*/}
                {/*<div>*/}
                    {/*<p>Interest alone will carry you to Fi in {flexInterest.years} years,*/}
                        {/*with {flexInterest.amount}*. <br/>*/}
                    {/*</p>*/}
                {/*</div>*/}
            {/*</ListGroupItem>*/}
            {/*<ListGroupItem>*/}
                {/*<h4>FI: ${nf.format(fi)}</h4>*/}
                {/*<i>25x comfortable expenses</i>*/}
                {/*<div>*/}
                    {/*<p>Interest alone will carry you to Fat Fi in {fiInterest.years} years, with*/}
                        {/*${fiInterest.amount}*. <br/>*/}
                    {/*</p>*/}
                {/*</div>*/}
            {/*</ListGroupItem>*/}
            {/*<ListGroupItem>*/}
                {/*<h4>FAT FI: ${nf.format(fatFi)}</h4>*/}
                {/*<i>30x comfortable expenses</i>*/}
            {/*</ListGroupItem>*/}
        </ListGroup>
    }
}

export default FiStagesContainer