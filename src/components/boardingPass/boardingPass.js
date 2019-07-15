import React from "react";
import "./boardingPass.css";
class BoardingPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkinData: this.props.location.state.checkinData
        }
    }
    render(){
        console.log(this.state);
        var finalPassengers=[],finalSeatNumber=[];
        this.state.checkinData.passengers.forEach((passenger)=>{
            if(passenger.checkedIn){
            finalPassengers.push(<p>{passenger.name}</p>);
            finalSeatNumber.push(<p>{passenger.SeatNumber}</p>)
            }
        });
        return(
            <div className="wrapper">
                <div className="qr-code">
                    <img src="https://i.imgur.com/vMisPqv.png" alt="QR_code"/>
                </div>
                <div className="content">
                    <div className="location">
                        <div className="item">
                            <h1>{this.state.checkinData.flightDetails.from}</h1>
                            <p>{this.state.checkinData.flightDetails.departureTime}</p>
                        </div>
                        <div className="path">
                            <i className="fas fa-plane"></i>
                        </div>
                        <div className="item">
                            <h1>{this.state.checkinData.flightDetails.to}</h1>
                            <p>{this.state.checkinData.flightDetails.arrivalTime}</p>
                        </div>
                    </div>
                    
                    <div className="info">
                        <div className="item">
                            <h4>Passenger</h4>
                            <div>{finalPassengers}</div>
                        </div>
                        <div className="item">
                            <h4>flight</h4>
                            <p>{this.state.checkinData.flightDetails.flightNumber}</p>
                        </div>
                        <div className="item">
                            <h4>gate</h4>
                            <p>{this.state.checkinData.flightDetails.gate}</p>
                        </div>
                        <div className="item">
                            <h4>seat</h4>
                            <div>{finalSeatNumber}</div>
                        </div>
                        <div className="item">
                            <h4>terminal</h4>
                            <p>{this.state.checkinData.flightDetails.terminal}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BoardingPass;
