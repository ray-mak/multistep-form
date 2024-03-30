import React from "react";
import { useId } from "react";
import { useState, useEffect } from "react";
import Buttons from "./Buttons";

export default function PersonalInfo(props) {
    const id = useId()
    const [required, setRequired] = useState({
        nameReq: false,
        phone: false,
        email: false
    })

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        if (mounted) {
            if (!required.nameReq && !required.phone && !required.email) {
                props.next()
            }
        } else {
            setMounted(true)
        }
    }, [required])

    function onSubmit(e) {
        e.preventDefault()
        props.formData.name === "" ? setRequired(prevState => ({...prevState, nameReq: true})) : 
            setRequired(prevState => ({...prevState, nameReq: false}))
        props.formData.email === "" ? setRequired(prevState => ({...prevState, email: true})) :
            setRequired(prevState => ({...prevState, email: false}))
        props.formData.phone === "" ? setRequired(prevState => ({...prevState, phone: true})) :
        setRequired(prevState => ({...prevState, phone: false}))
        
    }

    return (
        <div className="input-container">
            <h1 className="heading">Personal Info</h1>
            <p className="subheading">Please provide your name, email address, and phone number</p>
            <form onSubmit={onSubmit}>
                <label htmlFor={id + "-name"}>
                    Name
                    {required.nameReq && <span className="required">This field is required</span>}
                </label>
                    <input 
                        className={required.nameReq ? "required" : ""}
                        type="text"
                        name="name"
                        placeholder="e.g. Stephen King"
                        id={id + "-name"}
                        value={props.formData.name}
                        onChange={props.handleChange}
                     />
                <label htmlFor={id + "-email"}>
                        Email Address
                        {required.email && <span className="required">This field is required</span>}
                    </label>
                    <input
                        className={required.email ? "required" : ""}
                        type="email"
                        name="email"
                        placeholder="e.g. stephenking@lorem.com"
                        id={id + "-email"}
                        value={props.formData.email}
                        onChange={props.handleChange}
                    />
                <label htmlFor={id + "-phone"}>
                    Phone Number
                    {required.phone && <span className="required">This field is required</span>}
                </label>
                <input 
                    className={required.phone ? "required" : ""}
                    type="tel"
                    name="phone"
                    placeholder="e.g. +1 234 567 890"
                    id={id + "-phone"}
                    value={props.formData.phone}
                    onChange={props.handleChange}
                />
                <Buttons 
                currentStepIndex={props.currentStepIndex}
                back={props.back}
            />
            </form>
            
        </div>
    )
}