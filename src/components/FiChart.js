import React, { Component } from 'react'
import {
    Tooltip,
    Legend,
    XAxis,
    AreaChart,
    Area,
    ResponsiveContainer,
    ReferenceLine,
} from 'recharts';

class FiChart extends Component {
    estimateTimeRemaining() {
        let months = 1;
        let temp = this.props.current;
        let chart_data = [];

        let stages = this.props.fiStages;

        for (let key in stages) {
            let stage = stages[key];
            if (stage.id === 'fatFi') {
                let goal = stage.amount;
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
                    temp = temp + this.props.deposit;
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

    render() {
        let chart_data = this.estimateTimeRemaining();
        let stages = this.props.fiStages;
        let nf = new Intl.NumberFormat();

        return <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chart_data}>
                <XAxis dataKey="name"/>
                <Tooltip/>
                <Legend/>

                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>

                <ReferenceLine y={stages.sixMonth.amount}
                               label={stages.sixMonth.name + ": $" + nf.format(stages.sixMonth.amount)}
                               stroke={stages.sixMonth.color}
                               strokeDasharray="3 3" />

                <ReferenceLine y={stages.coreFreedom.amount}
                               label={stages.coreFreedom.name + ": $" + nf.format(stages.coreFreedom.amount)}
                               stroke={stages.coreFreedom.color}
                               strokeDasharray="3 3" />

                <ReferenceLine y={stages.comfortFreedom.amount}
                               label={stages.comfortFreedom.name + ": $" + nf.format(stages.comfortFreedom.amount)}
                               stroke={stages.comfortFreedom.color}
                               strokeDasharray="3 3" />

                <ReferenceLine y={stages.halfFi.amount}
                               label={stages.halfFi.name + ": $" + nf.format(stages.halfFi.amount)}
                               stroke={stages.halfFi.color}
                               strokeDasharray="3 3" />

                <ReferenceLine y={stages.leanFi.amount}
                               label={stages.leanFi.name + ": $" + nf.format(stages.leanFi.amount)}
                               stroke={stages.leanFi.color}
                               strokeDasharray="3 3" />

                <ReferenceLine y={stages.flexFi.amount}
                               label={stages.flexFi.name + ": $" + nf.format(stages.flexFi.amount)}
                               stroke={stages.flexFi.color}
                               strokeDasharray="3 3" />

                <ReferenceLine y={stages.fi.amount}
                               label={stages.fi.name + ": $" + nf.format(stages.fi.amount)}
                               stroke={stages.fi.color}
                               strokeDasharray="3 3" />

                <ReferenceLine y={stages.fatFi.amount}
                               label={stages.fatFi.name + ": $" + nf.format(stages.fatFi.amount)}
                               stroke={stages.fatFi.color}
                               strokeDasharray="3 3" />

                <Area type="monotone" dataKey="NetWorth" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    }
}

export default FiChart