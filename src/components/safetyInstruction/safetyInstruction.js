import React from 'react';
import config from '../../config';
import axios from 'axios';
import "./safetyInstruction.css";

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
                this.props.history.push('/boardingpass',{checkinData: response.data.checkinData});
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Safety Instructions</h1>
                <h2>Baggage</h2>
                <p>How and where you stow your carry-on baggage during a flight is a matter of flight safety. Any baggage stored in overhead compartments should fit appropriately, so that compartment doors latch securely. Baggage stored underneath the seat should not protrude, as any items underfoot might impede a quick exit in the case of an emergency. Should evacuation prove necessary, leave all your baggage behind.</p>
                <h2>Electronics</h2>
                <p>The use of electronic devices on board an aircraft is subject to limitations by the Federal Aviation Administration and the Federal Communications Commission. Use of cellular phones, for example, can interfere with important signaling devices used in the cockpit. For this reason, cellphones, radios and hand-held televisions are all prohibited during the flight. Cellular phones must be turned off or to a "airplane" setting during the duration of the flight. Use of laptops and other personal electronic devices is permissible at certain points during the flight. Flight attendants will signal when passengers are allowed to use them.</p>
                <h2>Emergency Procedures</h2>
                <p>If the cabin air pressure changes dramatically, oxygen masks might fall from the ceiling directly in front of you. Follow the airline's instructions in operating their masks. If a child is seated beside you, put on your own mask before helping to put a mask on the child. Should an emergency arise that requires you to evacuate the airplane, follow the lighting on the aisle or over the seats to the nearest exit. Follow any instructions you receive from flight attendants and remain calm. If you are sitting in an emergency exit row, you might need to perform extra actions, such as opening the emergency door. If you must evacuate along a slide, take off any high-heeled shoes before getting on the slide. Once you have evacuated the aircraft, move away from it. Never return to a burning aircraft.</p>
                <h2>General Safety Procedures</h2>
                <p>Each time that you fly, consult the safety information card provided by your airline for any variations or changes in the recommended safety procedures. Look for the exit closest to your seat, noting that the nearest exit might be behind you and counting the number of rows between your seat and the exit. Only sit in an emergency exit row if you are capable of following the extra emergency actions. Locate the flotation device, typically beneath your seat.</p>
                <form method="post" action={`${config.host}${config.location}${config.submitCheckin}`} onSubmit={this.submitConfirmation}>
                    <button type="submit" className="agree-btn">I agree</button>
                </form>
            </div>
        );
    }
};

export default SafetyInstruction;