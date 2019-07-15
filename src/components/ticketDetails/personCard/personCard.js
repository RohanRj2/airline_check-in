import React from "react";
import "./personCard.css";

const personCard = ({personDetails: { name,
    SeatNumber,
    age,
    checkedIn }, onChangeHandler}) => {
    return (
        <div className="l-input-group">
            <span>Seat : {SeatNumber},</span>
            <span>Age : {age}</span>
            <div className="person-checklist-item">
                <label htmlFor={SeatNumber}>{name}</label>
                <input type = "checkbox" className = "input" id = {SeatNumber} name = {SeatNumber} value={SeatNumber} onChange={onChangeHandler} disabled={checkedIn}/>
            </div>
        </div>
    );
};

export default personCard;