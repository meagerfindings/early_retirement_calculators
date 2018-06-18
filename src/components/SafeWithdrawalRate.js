import React, { Component } from 'react'
import Alert from "react-bootstrap/es/Alert";
import AppContainer from "./AppContainer";

class SafeWithdrawalRate extends Component {



    alertSWR() {
        let warnings = [];

        if (this.props.swr > .04) {
            warnings.push(
                <Alert bsStyle="danger" key={"1"}>
                    <strong>Potentially Unsafe Withdrawal Rate!</strong>
                    Withdrawal Rates above 4% have the potential to deplete your portfolio at an increased rate.
                    <br/>
                    <br/>
                    At a rate of <strong>{AppContainer.roundPercent(this.props.swr)}%</strong>, you may deplete your portfolio in <strong>[X] years and [X] months</strong>.
                </Alert>
            )
        } else if (this.props.swr < .04) {
            warnings.push(<span key={"2"}>
                <br/>
                This conservative rate may allow your portfolio to continue growing while you withdraw money.
                At a rate of <strong>{AppContainer.roundPercent(this.props.swr)}%</strong>, ....
                </span>
            )
        }

        return warnings
    }

    render() {
        let nf = new Intl.NumberFormat();

        return <div>
            <br/>
            <strong>Withdrawal Rate:</strong>
            <br/>
            With your withdrawal rate of {AppContainer.roundPercent(this.props.swr)}%, you would withdraw <strong>${nf.format(Math.round(this.props.stage_amount * this.props.swr))}</strong> per year.
            {this.alertSWR()}
        </div>
    }
}
export default SafeWithdrawalRate