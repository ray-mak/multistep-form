import React from "react";
import Buttons from "./Buttons";

export default function SelectPlan(props) {
    const yearlySelected = props.formData.planLength === "yearly" ? true : false

    return (
        <div className="input-container">
            <h1 className="heading">Select your plan</h1>
            <p className="subheading">You have the option of monthly or yearly billing</p>
            <form className="plan-form" onSubmit={props.onSubmit}>
                <div className="plan-form-container">
                <input 
                    type="radio" 
                    name="plan" 
                    id="arcade"
                    value="arcade"
                    checked={props.formData.plan === "arcade"}
                    onChange={props.handleChange}
                />
                <label htmlFor="arcade" className="plan-label">
                    <div className="plan-card">
                        <img className="plan-icon" src="https://github.com/ray-mak/multistep-form/assets/154634286/4b7488f2-460e-4715-b439-6067c600954a"/>
                        <div>
                            <p className="selection-title">Arcade</p>
                            <div className="subheading">{yearlySelected ? "$90/yr" : "$9/month"}</div>
                            {yearlySelected && <div className="promo-text">2 months free</div>}
                        </div>
                    </div>
                </label>
                <input 
                    type="radio" 
                    name="plan" 
                    id="advanced"
                    value="advanced"
                    checked={props.formData.plan === "advanced"}
                    onChange={props.handleChange}
                />
                <label htmlFor="advanced" className="plan-label">
                    <div className="plan-card">
                        <img className="plan-icon" src="https://github.com/ray-mak/multistep-form/assets/154634286/ecac89f9-4423-423f-a4ed-fc1e00f7060c"/>
                        <div>
                            <p className="selection-title">Advanced</p>
                            <div className="subheading">{yearlySelected ? "$120/yr" : "$12/month"}</div>
                            {yearlySelected && <div className="promo-text">2 months free</div>}
                        </div>
                    </div>
                </label>
                <input 
                    type="radio" 
                    name="plan" 
                    id="pro"
                    value="pro"
                    checked={props.formData.plan === "pro"}
                    onChange={props.handleChange}
                />
                <label htmlFor="pro" className="plan-label">
                    <div className="plan-card" >
                        <img className="plan-icon" src="https://github.com/ray-mak/multistep-form/assets/154634286/3ee39c13-efa5-47fd-bf70-10a2f90d8237"/>
                        <div>
                            <p className="selection-title">Pro</p>
                            <div className="subheading">{yearlySelected ? "$150/yr" : "$15/month"}</div>
                            {yearlySelected && <div className="promo-text">2 months free</div>}
                        </div>
                    </div>
                </label>
                </div>
                <div className="yearly-container center">
                    <input 
                        type="radio" 
                        name="planLength"
                        id="monthly" 
                        value="monthly" 
                        checked={props.formData.planLength === "monthly"}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="monthly" className="annual-label">Monthly</label>
                    <button type="button" className="toggle-btn" onClick={props.togglePlanLength} aria-label="Toggle monthly or annual plan"></button>
                    <div className={`dot ${yearlySelected ? "yearly-plan" : ""}`}></div>
                    <input 
                        type="radio" 
                        name="planLength"
                        id="yearly" 
                        value="yearly"
                        checked={props.formData.planLength === "yearly"}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="yearly" className="annual-label">Yearly</label>
                </div>
                <Buttons 
                currentStepIndex={props.currentStepIndex}
                back={props.back}
            />
            </form>
            
        </div>
    )
}