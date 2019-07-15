import React from "react";
import "./signIn.css";
import config from "../../config";
import axios from "axios";
import InputBlock from "./input/input";
import { Redirect } from 'react-router-dom';

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            isError: false,
            confirmationNumber: "",
            lastName: "",
            errorMessage: "",
            ticketDetails: {},
            redirect: false
        };
    }

    submitHandler(event) {
        event.preventDefault();
        const { confirmationNumber, lastName } = this.state;
        console.log(confirmationNumber, lastName);
        axios({
            method: event.target.method,
            url: event.target.action,
            data: { confirmationNumber, lastName }
        }).then(response => {
            if (response.data.error) {
                this.setState({
                    isError: true,
                    errorMessage: response.data.error
                });
            } else {
                this.setState({
                    ticketDetails: response.data,
                    redirect: true
                })
            }
        }).catch(err => {
            console.log(err);
        });
    }

    onChangeHandler = (event) => {
        event.preventDefault();
        switch (event.target.name) {
            case "confirmation-number": this.setState({
                confirmationNumber: event.target.value
            });
                break;
            case "last-name": this.setState({
                lastName: event.target.value
            });
                break;
            default: break;
        }
    }


    render() {
        return (
            <div>
                { this.state.redirect && <Redirect to={{
                    pathname: '/viewdetails',
                    state: this.state.ticketDetails
                }} /> }
                {this.state.isError && <div className="error">{this.state.errorMessage}</div>}
                <form method="post" action={`${config.host}${config.location}${config.fetchTicket}`} onSubmit={(event) => {
                    this.submitHandler(event);
                }}>
                    <InputBlock type="text" label="Confirmation Number" name="confirmation-number" onChange={this.onChangeHandler} value={this.state.confirmationNumber} />
                    <InputBlock type="text" name="last-name" label="Last Name" onChange={this.onChangeHandler} value={this.state.lastName} />
                    <InputBlock type="submit" name="submit-confirmation-btn" value="Submit" />
                </form>
            </div>
        );
    }
}
export default Signin;