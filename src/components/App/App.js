import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../../config/ProtectedRoute";

// Components
import Header from "../Header/Header";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import AddCredit from "../Financial/AddCredit";
import Pricing from "../Financial/Pricing";
import NewCampaign from "../Campaign/Details";

//CSS
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../UI/GlobalStyles";
import AppTheme from "../UI/AppTheme";

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/add-credit" component={AddCredit} />
          <Route path="/pricing" component={Pricing} />
          <ProtectedRoute path="/new-campaign" component={NewCampaign} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
