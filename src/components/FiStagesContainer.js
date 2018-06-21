import React, { Component } from 'react'
import FiStage from "./FiStage";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import FiChart from "./FiChart";
import {Col} from "react-bootstrap";

class FiStagesContainer extends Component {

    createStages(stages) {
        let stage_array = [];
        let index = 1;

        for(let key in stages) {
            let stage = stages[key];

            stage_array.push(<FiStage key={stage.id + index}
                                      name={stage.name}
                                      type={stage.type}
                                      description={stage.description}
                                      multiplier={stage.multiplier}
                                      stage_amount={stage.amount}
                                      next_stage={stages[stage.nextStage]}
                                      current={this.props.current}
                                      core={this.props.core || undefined}
                                      comfort={this.props.comfort || undefined}
                                      swr_display={stage.display_swr}
                                      progress_display={stage.display_goal_progress}
                                      growth_to_next_display={stage.display_goal_interest}
                                      monthly_savings={this.props.monthly_savings}
                                      roi={this.props.roi || undefined}
                                      swr={this.props.swr || undefined} />);
            index ++
        }
        return stage_array
    }

    render(){
        let fiStages = {
            threeMonth: {
                id: 'threeMonth',
                name: 'Three Month Emergency Fund',
                multiplier: (3/12),
                type: 'core',
                description: '3 months of core expenses. Only for emergencies.',
                nextStage: 'sixMonth',
                display_swr: false,
                display_goal_progress: true,
                display_goal_interest: false,
                amount: this.props.core * (3/12),
                color: "red"
            },
            sixMonth: {
                id: 'sixMonth',
                name: 'Six Month Emergency Fund',
                multiplier: (6/12),
                type: 'core',
                description: '6 months of core expenses. Only for emergencies.',
                nextStage: 'coreFreedom',
                display_swr: false,
                display_goal_progress: true,
                display_goal_interest: false,
                amount: this.props.core * (6/12),
                color: "red"
            },
            coreFreedom: {
                id: 'coreFreedom',
                name: 'Core Freedom',
                multiplier: 3,
                type: 'core',
                description: '3 years of core expenses covered. AKA: f-you Money.',
                nextStage: 'comfortFreedom',
                display_swr: false,
                display_goal_progress: true,
                display_goal_interest: false,
                amount: this.props.core * (3),
                color: "orange"
            },
            comfortFreedom: {
                id: 'comfortFreedom',
                name: 'Comfort Freedom',
                multiplier: 3,
                type: 'comfort',
                description: '3 years of comfortable expenses covered. AKA: f-you money.',
                nextStage: 'halfFi',
                display_swr: false,
                display_goal_progress: true,
                display_goal_interest: false,
                amount: this.props.comfort * (3),
                color: "orange"
            },
            halfFi: {
                id: 'halfFi',
                name: "Half Fi",
                multiplier: 12.5,
                type: "comfort",
                description: "12.5x comfortable expenses",
                nextStage: 'leanFi',
                display_swr: true,
                display_goal_progress: true,
                display_goal_interest: true,
                amount: this.props.comfort * 12.5,
                color: "blue"
            },
            leanFi: {
                id: 'leanFi',
                name: "Lean Fi",
                multiplier: 25,
                type: "core",
                description: "25x core expenses",
                nextStage: 'flexFi',
                display_swr: true,
                display_goal_progress: true,
                display_goal_interest: true,
                amount: this.props.core * 25,
                color: "green"
            },
            flexFi: {
                id: 'flexFi',
                name: "Flex Fi",
                multiplier: 20,
                type: "comfort",
                description: "20x comfortable expenses",
                nextStage: 'fi',
                display_swr: true,
                display_goal_progress: true,
                display_goal_interest: true,
                amount: this.props.comfort * 20,
                color: "green"
            },
            fi: {
                id: 'fi',
                name: "Fi",
                multiplier: 25,
                type: "comfort",
                description: "25x comfortable expenses",
                nextStage: 'fatFi',
                display_swr: true,
                display_goal_progress: true,
                display_goal_interest: true,
                amount: this.props.comfort * 25,
                color: "green"
            },
            fatFi: {
                id: 'fatFi',
                name: "Fat Fi",
                multiplier: 30,
                type: "comfort",
                description: "30x comfortable expenses",
                nextStage: 'fatFi',
                display_swr: true,
                display_goal_progress: true,
                display_goal_interest: false,
                amount: this.props.comfort * 30,
                color: "green"
            }
        };

        return <Grid className="fi-Stages-Container">
            <Row>
                <Col md={12} lg={12}>
                    <div className="fi-chart-container">
                        <br/>
                        <FiChart fiStages={fiStages}
                                 deposit={this.props.monthly_savings}
                                 comfort={this.props.comfort}
                                 core={this.props.core}
                                 roi={this.props.roi}
                                 current={this.props.current}/>
                    </div>
                </Col>
            </Row>
            <Row className="show-grid">
                {this.createStages(fiStages)}
            </Row>
        </Grid>
    }
}

export default FiStagesContainer