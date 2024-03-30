import React from "react";
import Buttons from "./Buttons";

export default function SelectPlan(props) {
    return (
        <div className="input-container">
            <h1 className="heading">Select your plan</h1>
            <p className="subheading">You have the option of monthly or yearly billing</p>
            <Buttons 
                currentStepIndex={props.currentStepIndex}
                next={props.next}
                back={props.back}
            />
        </div>
    )
}