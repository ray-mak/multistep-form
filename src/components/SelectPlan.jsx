import React from "react";
import Buttons from "./Buttons";

export default function SelectPlan(props) {
    return (
        <div className="input-container">
            <h1 className="heading">Select your plan</h1>
            <p className="subheading">You have the option of monthly or yearly billing</p>
            <form className="plan-form">
                <div className="plan-form-container">
                <input type="radio" name="plan" id="arcade"/>
                <label htmlFor="arcade" className="plan-label">
                    <div className="plan-card">
                        <img className="plan-icon" src="https://github.com/ray-mak/multistep-form/assets/154634286/4b7488f2-460e-4715-b439-6067c600954a"/>
                        <div>
                            <p className="selection-title">Arcade</p>
                            <div className="subheading">$9/month</div>
                        </div>
                    </div>
                </label>
                <input type="radio" name="plan" id="advanced"/>
                <label htmlFor="advanced" className="plan-label">
                    <div className="plan-card">
                        <img className="plan-icon" src="https://github.com/ray-mak/multistep-form/assets/154634286/ecac89f9-4423-423f-a4ed-fc1e00f7060c"/>
                        <div>
                            <p className="selection-title">Advanced</p>
                            <div className="subheading">$12/month</div>
                        </div>
                    </div>
                </label>
                <input type="radio" name="plan" id="pro"/>
                <label htmlFor="pro" className="plan-label">
                    <div className="plan-card" >
                        <img className="plan-icon" src="https://github.com/ray-mak/multistep-form/assets/154634286/3ee39c13-efa5-47fd-bf70-10a2f90d8237"/>
                        <div>
                            <p className="selection-title">Pro</p>
                            <div className="subheading">$15/month</div>
                        </div>
                    </div>
                </label>
                </div>
                <div className="yearly-container center">
                    <input type="radio" id="monthly" name="toggle-annual" className="toggle-annual"/>
                    <label htmlFor="monthly" className="annual-label">Monthly</label>
                    <input type="radio" id="yearly" name="toggle-annual"/>
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