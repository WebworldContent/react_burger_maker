import React from "react";
import './Burger.css';

export default function Burger(props) {

    const ingredients = {
        salad: <div className="Salad"></div>,
        bacon: <div className="Bacon"></div>,
        meat: <div className="Meat"></div>,
        cheese: <div className="Cheese"></div>
    };

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {props.items.map((items) => ingredients[items])}
            <div className="BreadBottom"></div>
        </div>
    );
}
