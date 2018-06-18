import React, { Component } from 'react'
import Alert from "react-bootstrap/es/Alert";
import AppContainer from "./AppContainer";

class SafeWithdrawalRate extends Component {



    alertSWR() {
        console.log(this.props.swr);
        let warnings = [];

        if (this.props.swr > .04) {
            warnings.push(
                <Alert bsStyle="danger" key={"1"}>
                    <strong>Potentially Unsafe Withdrawal Rate!</strong>
                    <p>
                        Withdrawal Rates above 4% have the potential to deplete your portfolio at an increased rate.
                        <br/>
                        <br/>
                        At a rate of <strong>{AppContainer.roundPercent(this.props.swr)}%</strong>, you may deplete your portfolio in <strong>[X] years and [X] months</strong>.
                    </p>
                </Alert>
            )
        } else if (this.props.swr < .04) {
            warnings.push(<p>
                <br/>
                This conservative rate will allow your portfolio to continue growing while you withdraw money.
                At a rate of <strong>{AppContainer.roundPercent(this.props.swr)}%</strong>, ....
                </p>
            )
        }

        return warnings
    }

    render() {
        let nf = new Intl.NumberFormat();

        return <div>
            <br/>
            <strong>Withdrawal Rate:</strong>
            <p>
                With your withdrawal rate of {AppContainer.roundPercent(this.props.swr)}%, you would withdraw <strong>${nf.format(Math.round(this.props.stage_amount * this.props.swr))}</strong> per year.
                {this.alertSWR()}
            </p>
        </div>
    }
}
export default SafeWithdrawalRate