import React from "react";
import Buttons from "./Buttons";

export default function Summary(props) {
    return (
        <div className="input-container">
            <h1 className="heading">Finishing Up</h1>
            <p className="subheading">Double check everything looks OK before confirming.</p>
            <div className="summary-container">
                <div className="plan-summary">
                    <div>
                        <p className="selection-title">Arcade (Yearly)</p>
                        <p className="subheading change">Change</p>
                    </div>
                    <p className="fw-700 selection-title">$90/yr</p>
                </div>
                <div className="summary-divider"></div>
                <div className="plan-summary">
                    <p className="subheading">Online Service</p>
                    <span>+$10/yr</span>
                </div>
            </div>
            <div className="total-container">
                <p className="subheading">Total(per year)</p>
                <span>$120/yr</span>
            </div>
            <Buttons
                currentStepIndex={props.currentStepIndex}
                back={props.back}
            />
        </div>
    )
}