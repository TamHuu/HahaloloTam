import MiniDrawer from "./Atomic/Drawer/MiniDrawer";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={MiniDrawer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
