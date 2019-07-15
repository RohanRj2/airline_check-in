import React from "react";
import "./input.css";
const InputBlock = (props) => {
  if(props.label){
    return (
      <div className="l-input-group">
        <label htmlFor={props.name}>{`Enter ${props.label}`}</label>
        <input type = {props.type} className = {`input input-${props.name}`} id = {props.name} name = {props.name} value={props.value} onChange={props.onChange}/>
      </div>
    );
  }
  else 
    return (<input type = {props.type} className = {`submit-btn input-${props.name}`} id = {props.name} name = {props.name} value={props.value} onChange={props.onChange}/>)
};

export default InputBlock;