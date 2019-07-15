import React from 'react';

const FlightDetails = ({ details: { flightNumber, from, to } }) => {
    return (
        <div>
            <p>
                <span>Flight Number: </span>
                <span>{flightNumber}</span>
            </p>
            <p>
                <span>from: </span>
                <span>{from}</span></p>
            <p>
                <span>To: </span>
                <span>{to}</span>
            </p>
        </div>
            );
};

export default FlightDetails;