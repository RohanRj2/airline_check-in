import React from "react";

const personCard = ({personDetails: { name,
    SeatNumber,
    age,
    checkedIn }, onChangeHandler}) => {
    return (
        <div className="l-input-group">
            <p>{SeatNumber}</p>
            <p>{age}</p>
            <label htmlFor={SeatNumber}>{name}</label>
            <input type = "checkbox" className = "input" id = {SeatNumber} name = {SeatNumber} value={SeatNumber} onChange={onChangeHandler} disabled={checkedIn}/>
        </div>
    );
};

export default personCard;