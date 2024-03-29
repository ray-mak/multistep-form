import React from "react";
import Sidebar from "./Sidebar";


export default function Info(props) {
    return (
        <div className="main-container">
            <Sidebar />
            {props.selection}
        </div>
    )
}