import React from "react";
import "./Menu.css";

export default function Menu() {
    return (
        <div className="MenuOptions">
            <div className="MenuSection">
                <h2>Salad</h2>
                <div className="MenuOptionRow">
                    <button className="MenuOptionButton" onClick="addIngredient('Salad')">Add</button>
                    <button className="MenuOptionButton" onClick="removeIngredient('Salad')">Remove</button>
                </div>
            </div>
            <div className="MenuSection">
                <h2>Bacon</h2>
                <div className="MenuOptionRow">
                    <button className="MenuOptionButton" onClick="addIngredient('Bacon')">Add</button>
                    <button className="MenuOptionButton" onClick="removeIngredient('Bacon')">Remove</button>
                </div>
            </div>
            <div className="MenuSection">
                <h2>Cheese</h2>
                <div className="MenuOptionRow">
                    <button className="MenuOptionButton" onClick="addIngredient('Cheese')">Add</button>
                    <button className="MenuOptionButton" onClick="removeIngredient('Cheese')">Remove</button>
                </div>
            </div>
        </div>
    );
}
