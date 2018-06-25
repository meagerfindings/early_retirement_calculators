import React, { Component } from 'react'
import {Modal} from "react-bootstrap";

class InformationModal extends Component {
    render() {
        return <Modal.Body>
                    <h3>What is FI?</h3>
                    <p>
                        There are many ways to define FI.
                        <br/>
                        I look at <strong>Financial Independence</strong> as a way of approaching the everyday decisions of life in such a way that my money is going to
                        what I value. It looks like minimizing what we spend while maximizing the value we receive.
                        This may look different for everyone and for many, the promised land is getting to a place where
                        they can live off of the returns of their investments. Check out the "<a href={"https://www.choosefi.com/038-the-why-of-fi/"} target={"blank"}>Why of Fi</a>" ChooseFi episode for a more exciting explanation.
                    </p>

                    <h3>What about FIRE?</h3>
                    <p>
                        FIRE stands for <i>Financial Independence, Retire Early</i>. This can look like retiring five years early
                        or as early as 30 years ahead of time, <a href={"http://www.mrmoneymustache.com/2013/02/22/getting-rich-from-zero-to-hero-in-one-blog-post/"}
                           target={"blank"}>checkout Mr. Money Mustache</a> if that sounds nifty.
                    </p>

                    <h3>How are normal people doing this?</h3>
                    <p>
                        Minimizing expenses, increasing income and savings, and being intentional in every day choices. Check out the "<a href={"https://www.choosefi.com/021-pillars-of-fi/"} target={"blank"}>Pillars of FI</a>" ChooseFi episode or article for more information.
                    </p>

                    <h3>Where can I learn more?</h3>
                    <ul>
                        <li>
                            The <a href={"https://www.choosefi.com/"} target={"blank"}>Choose Fi</a> podcast and website are amazing yet approachable resources.
                        </li>
                        <li>
                            Why stocks, what kind of stocks, and a wealth of personal finance knowledge can be found in <a href={"http://jlcollinsnh.com/stock-series/"} target={"blank"}>J.L. Collins Stock Series</a>.
                        </li>
                    </ul>
                </Modal.Body>
    }
}

export default InformationModal