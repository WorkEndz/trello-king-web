import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./view/Nav";

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/" exact component={Nav}></Route>
    </Switch>
  </Router>
  );
}

export default App;
