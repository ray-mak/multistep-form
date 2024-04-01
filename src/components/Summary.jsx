import React from "react";
import Buttons from "./Buttons";

export default function Summary(props) {
    const monthly = props.formData.planLength === "monthly" ? true : false
    const addOns = props.formData.onlineService || props.formData.largerStorage || props.formData.customizable ? true : false
    let plan = ""
    let planLength = ""
    let totalPrice = 0
    if (props.formData.plan === "arcade") {
        plan = "Arcade"
    } else if (props.formData.plan === "advanced") {
        plan = "Advanced"
    } else {
        plan = "Pro"
    }
    monthly ? planLength = "Monthly" : planLength = "Yearly"
    if (monthly) {
        totalPrice = 0
        const monthlyPrice = props.cost.monthly
        for (const key in monthlyPrice) {
            totalPrice += monthlyPrice[key]
        } 
    } else {
        totalPrice = 0
        const yearlyPrice = props.cost.yearly
        for (const key in yearlyPrice) {
            totalPrice += yearlyPrice[key]
        }
    }


    return (
        <div className="input-container">
            <h1 className="heading">Finishing Up</h1>
            <p className="subheading">Double check everything looks OK before confirming.</p>
            <div className="summary-container">
                <div className="plan-summary">
                    <div>
                        <p className="selection-title">{plan} ({planLength})</p>
                        <p className="subheading change" onClick={() => props.goToStepNum(1)}>Change</p>
                    </div>
                    {!monthly && props.formData.plan === "arcade" && <p className="fw-700 selection-title">$90/yr</p>}
                    {!monthly && props.formData.plan === "advanced" && <p className="fw-700 selection-title">$120/yr</p>}
                    {!monthly && props.formData.plan === "pro" && <p className="fw-700 selection-title">$150/yr</p>}
                    {monthly && props.formData.plan === "arcade" && <p className="fw-700 selection-title">$9/mo</p>}
                    {monthly && props.formData.plan === "advanced" && <p className="fw-700 selection-title">$12/mo</p>}
                    {monthly && props.formData.plan === "pro" && <p className="fw-700 selection-title">$15/mo</p>}
                </div>
                {addOns && <div className="summary-divider"></div>}
                {!monthly && props.cost.yearly.onlineService != 0 && <div className="plan-summary">
                    <p className="subheading">Online Service</p>
                    <span>+$10/yr</span>
                </div>}
                {monthly && props.cost.monthly.onlineService != 0 && <div className="plan-summary">
                    <p className="subheading">Online Service</p>
                    <span>+$1/mo</span>
                </div>}
                {!monthly && props.cost.yearly.largerStorage != 0 && <div className="plan-summary">
                    <p className="subheading">Larger Storage</p>
                    <span>+$20/yr</span>
                </div>}
                {monthly && props.cost.monthly.largerStorage != 0 && <div className="plan-summary">
                    <p className="subheading">Larger Storage</p>
                    <span>+$2/mo</span>
                </div>}
                {!monthly && props.cost.yearly.customizable != 0 && <div className="plan-summary">
                    <p className="subheading">Customizable Profile</p>
                    <span>+$20/yr</span>
                </div>}
                {monthly && props.cost.monthly.customizable != 0 && <div className="plan-summary">
                    <p className="subheading">Customizable Profile</p>
                    <span>+$2/mo</span>
                </div>}
            </div>
            <div className="total-container">
                <p className="subheading">Total({monthly ? "per month" : "per year"})</p>
                <span>${totalPrice}/{monthly ? "mo" : "yr"}</span>
            </div>
            <Buttons
                currentStepIndex={props.currentStepIndex}
                back={props.back}
                onSubmit={props.onSubmit}
            />
        </div>
    )
}