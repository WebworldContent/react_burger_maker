import React from "react";
import './Burger.css';

export default function Burger(props) {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {props.items.map((item, indx) => <div className={item} key={indx}></div> )}
            <div className="BreadBottom"></div>
        </div>
    );
}
