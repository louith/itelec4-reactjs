import React from "react";
import './expenses.css'

function Expenses(props) {
    return <button
    className="wrapper"
    onClick={() => {
        alert("You clicked " + props.name + " - Php " + props.price)
    }}
    >
        <h2 className="item">{props.name}</h2>
        <h2 className="price">Php {props.price}</h2>
    </button>
}

export default Expenses;