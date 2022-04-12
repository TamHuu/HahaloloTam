import "./App.css";
import MiniDrawer from "./Atomic/Drawer/MiniDrawer";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasicTable from "./Atomic/Table/BasicTable";
import FormDialog from "./Atomic/Table/FormDialog";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="./">BasicTable</Link>
            </li>
            <li>
              <Link to="">FormDialog</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" component={MiniDrawer} />
          <Route path="/BasicTable" component={BasicTable} />
          <Route path="/FormDialog" component={FormDialog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
