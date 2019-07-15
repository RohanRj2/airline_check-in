import React from 'react';
import config from '../../config';
import axios from 'axios';

class SafetyInstruction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkinState: this.props.location.state.checkinState
        }
    }

    submitConfirmation = (e) => {
        e.preventDefault();
        axios.post(e.target.action,{
            confirmationNumber: this.state.checkinState.confirmationNumber,
            checkedInSeats: this.state.checkinState.selectedSeats
        }).then(response => {
            if(response.data.isConfirmationSuccess) {
                this.props.history.push('/boardingpass');
            }
        })

    }

    render() {
        return (
            <div>
                <p>Instructions!!!</p>
                <form method="post" action={`${config.host}${config.location}${config.submitCheckin}`} onSubmit={this.submitConfirmation}>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        );
    }
};

export default SafetyInstruction;