import React, { Component } from 'react'
import {
    Tooltip,
    Legend,
    XAxis,
    AreaChart,
    Area,
    ResponsiveContainer, ReferenceLine
} from 'recharts';
import FiChartReference from "./FiChartReference";

class FiChart extends Component {
    estimateTimeRemaining() {
        let months = 1;
        let temp = this.props.current;
        let chart_data = [];

        let stages = this.props.fiStages;

        for (let key in stages) {
            let stage = stages[key];
            if (stage.id === 'fatFi') {
                let stage_type = this.props.type;

                let stage_expenses;
                if (stage_type === 'core') {
                    stage_expenses = this.props.core;
                } else {
                    stage_expenses = this.props.comfort;
                }
                if (typeof stage_expenses === 'undefined') {
                    stage_expenses = 0.0001;
                }

                let goal = stage.multiplier * stage_expenses;
                let counter = 0;
                if (temp < goal) {

                    for (months; temp < goal; months++) {
                        temp = temp + (this.props.deposit);
                        temp = temp + (temp * (this.props.roi / 12));

                        counter++;
                        if (counter === 12) {
                            chart_data.push(
                                {
                                    name: (months / 12) + " years",
                                    NetWorth: Math.round(temp)
                                });
                            counter = 0
                        }
                    }
                }
                for (counter; counter < 11; counter++) {
                    months++;
                    temp = temp + (this.props.deposit);
                    temp = temp + (temp * (this.props.roi / 12));
                }
                chart_data.push(
                    {
                        name: (months/12) + " years",
                        NetWorth: Math.round(temp)
                    });
            }
        }
        return chart_data;
    }

    generateReferenceLabels(){
        let label_array = [];
        let stages = this.props.fiStages;

        for (let key in stages) {
            let stage = stages[key];

            if (stage.id !== 'threeMonth') {
                let stage_type = this.props.type;
                let stage_expenses;
                if (stage_type === 'core') {
                    stage_expenses = this.props.core;
                } else {
                    stage_expenses = this.props.comfort;
                }
                if (typeof stage_expenses === 'undefined') {
                    stage_expenses = 0.0001;
                }
console.log(<FiChartReference stage_expenses={stage_expenses}
                              label={stage.name}
                              key={stage_expenses}/>);
                label_array.push(
                    <FiChartReference stage_expenses={stage_expenses}
                                      label={stage.name}
                                      key={stage_expenses}/>);
            }
        }

        return label_array
    }


    render() {
        let chart_data = this.estimateTimeRemaining();
        return <div>
            <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chart_data}>
                <XAxis dataKey="name"/>
                {/*<YAxis/>*/}
                <Tooltip/>
                <Legend/>

                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>

                {/*{this.generateReferenceLabels()}*/}

                {/*dynamically create these*/}
                <ReferenceLine y={18000} label="6 Month Emergency Fund" stroke="red" strokeDasharray="3 3" />
                <ReferenceLine y={108000} label="Core Freedom" stroke="orange" strokeDasharray="3 3" />
                <ReferenceLine y={150000} label="Comfort Freedom" stroke="orange" strokeDasharray="3 3" />
                <ReferenceLine y={625000} label="Half Fi" stroke="blue" strokeDasharray="3 3" />
                <ReferenceLine y={900000} label="Lean Fi" stroke="Green" strokeDasharray="3 3" />
                <ReferenceLine y={1000000} label="Flex Fi" stroke="Green" strokeDasharray="3 3" />
                <ReferenceLine y={1200000} label="Fi" stroke="Green" strokeDasharray="3 3" />
                <ReferenceLine y={1500000} label="Fat Fi" stroke="Green" strokeDasharray="3 3" />

                <Area type="monotone" dataKey="NetWorth" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    }
}

export default FiChart