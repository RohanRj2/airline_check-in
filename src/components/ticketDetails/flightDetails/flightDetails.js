import React from 'react';
import "./flightDetails.css";
const FlightDetails = ({ details: { flightNumber, from, to } }) => {
    return (
        <div className="flight-details-container flight-details-list">
            <p className="flight-details">
                <span>Flight Number : </span>
                <span>{flightNumber}</span>
            </p>
            <p className="flight-details">
                <span>from : </span>
                <span>{from}</span></p>
            <p className="flight-details">
                <span>To : </span>
                <span>{to}</span>
            </p>
        </div>
            );
};

export default FlightDetails;