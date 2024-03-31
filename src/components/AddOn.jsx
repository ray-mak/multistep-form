import React from "react";
import Buttons from "./Buttons";

export default function AddOn(props) {
    return (
        <div className="input-container">
            <h1 className="heading">Pick add-ons</h1>
            <p className="subheading">Add-ons help enhance your gaming experience.</p>
            <form className="addon-container"> 
                <input 
                        type="checkbox" 
                        id="online-service"
                    />
                <label htmlFor="online-service" className="addon-label">
                    <div className="checkmark"></div>
                    <div className="addon-text">
                        <div className="selection-title">Online Service</div>
                        <div className="subheading">Access to multiplayer games</div>
                    </div>
                    <p className="purple-text">+$1/mo</p>
                </label>
                <input 
                        type="checkbox" 
                        id="larger-storage"
                    />
                <label htmlFor="larger-storage" className="addon-label">
                <div className="checkmark"></div>
                    <div className="addon-text">
                        <div className="selection-title">Larger Storage</div>
                        <div className="subheading">Extra 1TB of cloud save</div>
                    </div>
                    <p className="purple-text">+$2/mo</p>
                </label>
                <input 
                        type="checkbox" 
                        id="customizable"
                    />
                <label htmlFor="customizable" className="addon-label">
                <div className="checkmark"></div>
                    <div className="addon-text">
                        <div className="selection-title">Customizable Profile</div>
                        <div className="subheading">Custom theme on your profile</div>
                    </div>
                    <p className="purple-text">+$2/mo</p>
                </label>
                <Buttons
                    currentStepIndex={props.currentStepIndex}
                    back={props.back}
                />
            </form>           
        </div>
    )
}