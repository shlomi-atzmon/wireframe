import React from "react";
import '../../styles/Manifest.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../../hoc/ProtectedRoute/ProtectedRoute";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import AddCredit from "../Financial/AddCredit";
import Pricing from "../Financial/Pricing";

// Add Campaign
import NewCampaign from "../Campaign/NewCampaign";
import AddRecipients from '../Campaign/AddRecipients';
import AddModules from '../Campaign/AddModules';
import ScheduleCampaign from '../Campaign/ScheduleCampaign';

const App = () => {
    return (
    <div className="ui Fluid">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/add-credit" component={AddCredit} />
          <Route path="/pricing" component={Pricing} />
          <ProtectedRoute path="/new-campaign" component={NewCampaign} />
          <ProtectedRoute path="/add-recipients" component={AddRecipients} />
          <ProtectedRoute path="/add-modules" component={AddModules} />
          <ProtectedRoute path="/schedule-campaign" component={ScheduleCampaign} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
