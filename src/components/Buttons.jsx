import React from "react";

export default function Buttons(props) {
    return (
        <div className="buttons-container">
            {props.currentStepIndex !== 0 && 
                <button 
                    type="button" 
                    className="button go-back"
                    onClick={props.back}>Go Back</button>
            }
            {props.currentStepIndex !== 3 && <button type="submit" className="button next-step">Next Step</button>}
            {props.currentStepIndex == 3 && <button type="submit" onClick={props.onSubmit} className="button next-step">Confirm</button>}
        </div>
    )
}