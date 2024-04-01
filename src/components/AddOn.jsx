import React from "react";
import Buttons from "./Buttons";

export default function AddOn(props) {
    const yearly = props.formData.planLength === "yearly" ? true : false

    return (
        <div className="input-container">
            <h1 className="heading">Pick add-ons</h1>
            <p className="subheading">Add-ons help enhance your gaming experience.</p>
            <form className="addon-container" onSubmit={props.onSubmit}> 
                <input 
                        type="checkbox" 
                        id="online-service"
                        name="onlineService"
                        checked={props.formData.onlineService}
                        onChange={props.handleChange}
                    />
                <label htmlFor="online-service" className="addon-label">
                    <div className="checkmark"></div>
                    <div className="addon-text">
                        <div className="selection-title">Online Service</div>
                        <div className="subheading">Access to multiplayer games</div>
                    </div>
                    <p className="purple-text">{yearly ? "+$10/yr" : "+$1/mo"}</p>
                </label>
                <input 
                        type="checkbox" 
                        id="larger-storage"
                        name="largerStorage"
                        checked={props.formData.largerStorage}
                        onChange={props.handleChange}
                    />
                <label htmlFor="larger-storage" className="addon-label">
                <div className="checkmark"></div>
                    <div className="addon-text">
                        <div className="selection-title">Larger Storage</div>
                        <div className="subheading">Extra 1TB of cloud save</div>
                    </div>
                    <p className="purple-text">{yearly ? "+$20/yr" : "+$2/mo"}</p>
                </label>
                <input 
                        type="checkbox" 
                        id="customizable"
                        name="customizable"
                        checked={props.formData.customizable}
                        onChange={props.handleChange}
                    />
                <label htmlFor="customizable" className="addon-label">
                <div className="checkmark"></div>
                    <div className="addon-text">
                        <div className="selection-title">Customizable Profile</div>
                        <div className="subheading">Custom theme on your profile</div>
                    </div>
                    <p className="purple-text">{yearly ? "+$20/yr" : "+$2/mo"}</p>
                </label>
                <Buttons
                    currentStepIndex={props.currentStepIndex}
                    back={props.back}
                />
            </form>           
        </div>
    )
}