import MiniDrawer from "./Atomic/Drawer/MiniDrawer";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicTable from "./Atomic/Table/BasicTable";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/category" component={MiniDrawer} />
          <Route path="/product" component={MiniDrawer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
