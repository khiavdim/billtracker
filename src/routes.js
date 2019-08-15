import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Bills from "./Components/Bills/Bills";
import Gallery from "./Components/Gallery/Gallery";
import Users from "./Components/Users/Users";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/bills" component={Bills} />
    <Route path="/user/:user_id" component={Users} />
    <Route path="/gallery" component={Gallery} />
  </Switch>
);
