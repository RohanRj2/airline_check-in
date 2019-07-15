import React from "react";
import ReactDOM from "react-dom";
import signIn from "./components/signIn/signIn";
import ticketDetails from "./components/ticketDetails/ticketDetails";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";

const Index = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={signIn} />
            <Route exact path="/viewdetails" component={ticketDetails} />
            {/* <Route path="/safetyinstructions" component={safetyInstruction} />
            <Route path="/boardingpass" component={boardingPass} />
            <Route component={Notfound} /> */}
        </Switch>
    </Router> 
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));