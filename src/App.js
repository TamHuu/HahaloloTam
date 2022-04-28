import MiniDrawer from "./Atomic/Drawer/Drawer";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CollapsibleTable from "./Atomic/Page/PageCategory/CollapsibleTable";
import CustomizedTables from "./Atomic/Page/PageProduct/CustomizedTables";
import BasicTable from "./Atomic/Table/BasicTable";
function App() {
  return (
    <Router>
      <MiniDrawer />
      <div>
        <Switch>
          <Route exact path="/" component={BasicTable} />
          <Route path="/category" component={CollapsibleTable} />
          <Route path="/product" component={CustomizedTables} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
