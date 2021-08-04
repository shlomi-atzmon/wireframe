import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import AddCredit from "../Financial/AddCredit";
import Pricing from "../Financial/Pricing";
import NewCampaign from '../Campaign/Details';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add-credit" component={AddCredit} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/new-campaign" component={NewCampaign} />
      </BrowserRouter>
    </div>
  );
};

export default App;
