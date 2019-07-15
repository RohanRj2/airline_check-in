import React from "react";
import axios from "axios";
import config from "../../config";
import "./ticketDetails.css";
import PersonCard from "./personCard/personCard";
import FlightDetails from "./flightDetails/flightDetails";
import { withRouter } from 'react-router';

class TicketDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmationNumber: this.props.location.state.id,
            details: {},
            selectedSeats: []
        };
    }

    componentDidMount() {
        axios.post(`${config.host}${config.location}${config.fetchTicket}`,
            { confirmationNumber: this.state.confirmationNumber }
        ).then(response => {
            if (!response.error) {
                this.setState({
                    details: response.data
                })
            }
        })
    }

    onPersonSelect = (event) => {
        const selectedSeats = [...this.state.selectedSeats];
        if(event.target.checked && this.state.selectedSeats.indexOf(event.target.value)===-1) {
            selectedSeats.push(event.target.value);
            this.setState({
                selectedSeats: selectedSeats
            })
        } else if (!event.target.checked && this.state.selectedSeats.indexOf(event.target.value)>=0) {
           this.setState({
               selectedSeats: selectedSeats.filter(seat => seat!==event.target.value)
           })
        }
    }

    render() {
        console.log(this.state.selectedSeats);
        return (
            <div className="ticket-details">
                <div>{
                    this.state.details.flightDetails && <FlightDetails details={this.state.details.flightDetails} />
                        }
                        </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.props.history.push('/safetyinstructions', {checkinState: this.state});
                    }}>
                        {
                            this.state.details.passengers && this.state.details.passengers.map(person => {
                                return (
                                    <PersonCard personDetails = {person} onChangeHandler = {this.onPersonSelect} />
                                )
                            })
                        }
                        <button type='submit' class="next-btn">Submit</button>
                    </form>
            </div>
                );
            }
        }
        
export default withRouter(TicketDetails);