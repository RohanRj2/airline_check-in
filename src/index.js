import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/signIn/signIn";
import TicketDetails from "./components/ticketDetails/ticketDetails";
import SafetyInstruction from "./components/safetyInstruction/safetyInstruction";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { browserHistory } from "react-router";
import "./index.css";

const Index = () => {
  return (
    <Router>
        <Switch history={browserHistory}>
            <Route path="/" exact component={SignIn} />
            <Route path="/viewdetails" exact component={TicketDetails} />
            <Route path="/safetyinstructions" exact component={SafetyInstruction} />
            {/* <Route path="/boardingpass" component={boardingPass} />
            <Route component={Notfound} /> */}
        </Switch>
    </Router> 
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));