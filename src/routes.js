import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Bills from "./Components/Bills/Bills";
import Gallery from "./Components/Gallery/Gallery";
import Users from "./Components/Users/Users";
import Friends from "./Components/Friends/Friends";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/bills" component={Bills} />
    <Route path="/user/:user_id" component={Users} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/friends" component={Friends} />
  </Switch>
);
