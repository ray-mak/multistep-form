import React from "react";
import { useId } from "react";
import Buttons from "./Buttons";

export default function PersonalInfo(props) {
    const id = useId()

    return (
        <div className="input-container">
            <h1 className="heading">Personal Info</h1>
            <p className="subheading">Please provide your name, email address, and phone number</p>
            <form>
                <label htmlFor={id + "-name"}>Name</label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="e.g. Stephen King"
                        id={id + "-name"}
                     />
                <label htmlFor={id + "-email"}>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="e.g. stephenking@lorem.com"
                        id={id + "-email"}
                    />
                <label htmlFor={id + "-phone"}>
                    Phone Number
                    <span className="required">This field is required</span>
                </label>
                <input className="required"
                    type="tel"
                    name="phone"
                    placeholder="e.g. +1 234 567 890"
                    id={id + "-phone"}
                />
            </form>
            <Buttons 
                currentStepIndex={props.currentStepIndex}
            />
        </div>
    )
}