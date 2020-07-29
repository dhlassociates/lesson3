import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
      <Route path="/resume" component={Resume} />
        <Route exact path="/" component={Home} />

      </Switch>
    </>
  );
}

export default App;
