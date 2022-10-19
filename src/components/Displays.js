import React from "react";
import "./cssfile.css"

export default function Displays(props) {
    return (
        <div className="display">
            <div className="border">
                <div className="display-1">{props.smallDisplay}</div>
                <div className="display-2"> {props.display} </div>
            </div>
        </div>
    )
}