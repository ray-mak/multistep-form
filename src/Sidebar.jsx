import React from "react";

export default function Sidebar(props) {
    const stepNum = props.currentStepIndex
    
    return (
        <div className="sidebar">
            <div className="step-container">
                <div className={`step-number center ${stepNum === 0 ? "active" : ""}`}>1</div>
                <div className="step-label-container">
                    <p className="step-text fs-200">STEP 1</p>
                    <p className="step-name">YOUR INFO</p>
                </div>
            </div>
            <div className="step-container">
                <div className={`step-number center ${stepNum === 1 ? "active" : ""}`}>2</div>
                <div className="step-label-container">
                    <p className="step-text fs-200">STEP 2</p>
                    <p className="step-name">SELECT PLAN</p>
                </div>
            </div>
            <div className="step-container">
                <div className={`step-number center ${stepNum === 2 ? "active" : ""}`}>3</div>
                <div className="step-label-container">
                    <p className="step-text fs-200">STEP 3</p>
                    <p className="step-name">ADD-ONS</p>
                </div>
            </div>
            <div className="step-container">
                <div className={`step-number center ${stepNum === 3 || stepNum === 4 ? "active" : ""}`}>4</div>
                <div className="step-label-container">
                    <p className="step-text fs-200">STEP 4</p>
                    <p className="step-name">SUMMARY</p>
                </div>
            </div>
        </div>
    )
}