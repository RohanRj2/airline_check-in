import React from "react";
import "./input.css";
const InputBlock = (props) => {
    return (
      <div className="l-input-group">
        <label htmlFor={props.name}>{`Enter ${props.label}`}</label>
        <input type = {props.type} className = {`input input-${props.name}`} id = {props.name} name = {props.name} value={props.value} onChange={props.onChange}/>
      </div>
    );
};

export default InputBlock;