import React from "react";
import Buttons from "./Buttons";

export default function AddOn(props) {
    return (
        <div className="input-container">
            <h1 className="heading">Pick add-ons</h1>
            <p className="subheading">Add-ons help enhance your gaming experience.</p>
            <Buttons
                currentStepIndex={props.currentStepIndex}
                next={props.next}
                back={props.back}
            />
        </div>
    )
}