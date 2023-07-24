import React from "react";
import "./Menu.css";

export default function Menu(props) {

    function addIngredient(value) {
        props.addIngredients(value);
    }

    function removeIngredient(value) {
        props.removeIngredients(value);
    }

    return (
        <div className="MenuOptions">
            <div className="MenuSection">
                <h2>Salad</h2>
                <div className="MenuOptionRow">
                    <button className="MenuOptionButton" onClick={() => addIngredient('salad')}>Add</button>
                    <button className="MenuOptionButton" onClick={() => removeIngredient('salad')}>Remove</button>
                </div>
            </div>
            <div className="MenuSection">
                <h2>Bacon</h2>
                <div className="MenuOptionRow">
                    <button className="MenuOptionButton" onClick={() => addIngredient('bacon')}>Add</button>
                    <button className="MenuOptionButton" onClick={() => removeIngredient('bacon')}>Remove</button>
                </div>
            </div>
            <div className="MenuSection">
                <h2>Cheese</h2>
                <div className="MenuOptionRow">
                    <button className="MenuOptionButton" onClick={() => addIngredient('cheese')}>Add</button>
                    <button className="MenuOptionButton" onClick={() => removeIngredient('cheese')}>Remove</button>
                </div>
            </div>
        </div>
    );
}
