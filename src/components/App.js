import React, { useState } from "react";
import Displays from "./Displays";
import Buttons from "./Buttons";

export default function App() {

    const [display, setDisplay] = React.useState(["0"])
    const [smallDisplay, setSmallDisplay] = React.useState(0)

    // /converting/ 

    function covertArraytoInt(arr) {
        let string = ""
        for (let i = 0; i < arr.length; i++) {
            string = string.concat(arr[i])
        }
        return parseInt(string)
    }



    //   calculating
    function calculate(arr) {
        let index = 0
        let operand1 = 0
        let operand2 = 0
        let checkmultipleoperator = [0]
        if (arr.includes("+") || arr.includes("-") || arr.includes("x") || arr.includes("/") || arr.includes("%")) {
            for (let i = 0; i < arr.length; i++) {
                console.log("for loop")
                if (arr[i] === "+" || arr[i] == "-" || arr[i] === "x" || arr[i] === "/" || arr[i] === "%") {
                    index = i
                    break
                    checkmultipleoperator.push(i)
                }
            }




            // plus operator
            if (arr.includes("+")) {
                const first = arr.slice(0, index)
                operand1 = covertArraytoInt(first)
                const f = index + 1
                const second = arr.slice(f, arr.length)
                operand2 = covertArraytoInt(second)
                setSmallDisplay(prev => prev = operand1 + operand2)
            }
            else if (arr.includes("-")) {
                const first = arr.slice(0, index)
                operand1 = covertArraytoInt(first)
                const f = index + 1
                const second = arr.slice(f, arr.length)
                operand2 = covertArraytoInt(second)
                setSmallDisplay(prev => prev = operand1 - operand2)

            }
            else if (arr.includes("/")) {
                const first = arr.slice(0, index)
                operand1 = covertArraytoInt(first)
                const f = index + 1
                const second = arr.slice(f, arr.length)
                operand2 = covertArraytoInt(second)
                setSmallDisplay(prev => prev = operand1 / operand2)

            }
            else if (arr.includes("%")) {
                const first = arr.slice(0, index)
                operand1 = covertArraytoInt(first)
                const f = index + 1
                const second = arr.slice(f, arr.length)
                operand2 = covertArraytoInt(second)
                setSmallDisplay(prev => prev = operand1 % operand2)

            }
            else if (arr.includes("x")) {
                const first = arr.slice(0, index)
                operand1 = covertArraytoInt(first)
                const f = index + 1
                const second = arr.slice(f, arr.length)
                operand2 = covertArraytoInt(second)
                setSmallDisplay(prev => prev = operand1 * operand2)

            }


        }
        return display
    }
    function fist(prev, value) {
        prev = value
        return prev
    }

    function clear() {
        setSmallDisplay(0)
        return ["0"]
    }

    function clicked(event) {
        const value = event.target.innerText
        setDisplay(prev => value === "C" ? clear() : value === "CE" ? prev.slice(0, prev.length - 1) : value === "=" ? calculate(prev) : prev.length === 1 ? prev[0] === "0" ? fist(prev, value) : [...prev, value] : [...prev, value])
    }

    return (
        <div className="calculator">
            <Displays display={display} smallDisplay={smallDisplay} />
            <Buttons clicked={clicked} />
        </div>
    )
}