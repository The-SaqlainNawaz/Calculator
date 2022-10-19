import React from "react"
import "./cssfile.css"

export default function Buttons(props) {

    return (
        <div className="all_button">
            <div className="button all-clear" onClick={props.clicked}>C</div>
            <div className="button last-entity-clear" onClick={props.clicked}>CE</div>
            <div className="button operation" onClick={props.clicked}>%</div>
            <div className="button operation" onClick={props.clicked}>/</div>
            <div className="button number" onClick={props.clicked}>7</div>
            <div className="button number" onClick={props.clicked}>8</div>
            <div className="button number" onClick={props.clicked}>9</div>
            <div className="button operation" onClick={props.clicked}>x</div>
            <div className="button number" onClick={props.clicked}>4</div>
            <div className="button number" onClick={props.clicked}>5</div>
            <div className="button number" onClick={props.clicked}>6</div>
            <div className="button operation" onClick={props.clicked}>-</div>
            <div className="button number" onClick={props.clicked}>1</div>
            <div className="button number" onClick={props.clicked}>2</div>
            <div className="button number" onClick={props.clicked}>3</div>
            <div className="button operation" onClick={props.clicked}>+</div>
            <div className="button btn-0 number" onClick={props.clicked}>0</div>
            <div className="button number dot" onClick={props.clicked}>.</div>
            <div className="button equal" onClick={props.clicked}>=</div>
        </div>
    )
}