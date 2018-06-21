import React, { Component } from 'react'
// import Alert from "react-bootstrap/es/Alert";

class SafeWithdrawalRate extends Component {

    // Deprecating SWR depletion estimation after reading: https://www.madfientist.com/safe-withdrawal-rate/

    // calculateDepletionTime(portfolio, swr) {
    //     let temp = portfolio;
    //     let months;
    //     let withdrawal = temp * swr;
    //     let multiplier = swr;
    //
    //     // add 2% after first year
    //
    //     if (swr > .04) {
    //
    //         if (temp > withdrawal) {
    //
    //
    //
    //             for (let i = 0; temp > withdrawal; i++) {
    //                 console.log("test " + i);
    //
    //                 if (i > 0){
    //                     multiplier = multiplier + 0.02;
    //                     withdrawal = multiplier  * temp;
    //                 }
    //
    //                 console.log("Multiplier amount: " + multiplier);
    //
    //             console.log("initial: " + temp);
    //
    //                 let net = temp - withdrawal;
    //
    //                 console.log("net: " + net);
    //
    //                 let interest = net * this.props.roi;
    //
    //                 console.log("interest: " + interest);
    //
    //
    //                 temp = net + interest;
    //
    //                 console.log("temp: " + temp);
    //
    //                 months = i
    //             }
    //
    //             console.log("----------------------------------------------");
    //             console.log(months + " years until " + portfolio + " depleted");
    //             console.log("----------------------------------------------");
    //         }
    //     }
    //
    //     return {
    //          years: "years",
    //           months: "months" }
    // }

    // alertSWR() {
    //     let warnings = [];
    //
    //     // this.calculateDepletionTime(this.props.portfolio, this.props.swr);
    //
    //     if (this.props.swr > .04) {
    //         warnings.push(
    //             <Alert bsStyle="danger" key={"1"}>
    //                 <strong>Potentially Unsafe Withdrawal Rate!</strong>
    //                 Withdrawal Rates above 4% have the potential to deplete your portfolio at an increased rate.
    //                 <br/>
    //                 <br/>
    //                 At a rate of <strong>{AppContainer.roundPercent(this.props.swr)}%</strong>, you may deplete your portfolio.
    //             </Alert>
    //         )
    //     }

        // else if (this.props.swr < .04) {
        //     warnings.push(<span key={"2"}>
        //         <br/>
        //         This conservative rate may allow your portfolio to continue growing while you withdraw money.
        //         At a rate of <strong>{AppContainer.roundPercent(this.props.swr)}%</strong>, ....
        //         </span>
        //     )
        // }

    //     return warnings
    // }

    render() {
        let nf = new Intl.NumberFormat();

        return <div>
            <br/>
            <strong>Withdrawal Rate:</strong> ${nf.format(Math.round(this.props.stage_amount * this.props.swr))} per year
            {/*With your withdrawal rate of {AppContainer.roundPercent(this.props.swr)}%, you would withdraw <strong>${nf.format(Math.round(this.props.stage_amount * this.props.swr))}</strong> per year.*/}
            {/*{this.alertSWR()}*/}
        </div>
    }
}

export default SafeWithdrawalRate