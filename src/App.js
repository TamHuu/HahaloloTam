import MiniDrawer from "./Atomic/Drawer/Drawer";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import TableCategory from "./Atomic/Page/PageCategory/TableCategory";
import TableProduct from "./Atomic/Page/PageProduct/TableProduct";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flex: 1,
    padding: theme.spacing(3),
    backgroundImage:
      "url(https://media.istockphoto.com/photos/five-cocktails-in-hands-joined-in-celebratory-toast-picture-id1303977605?b=1&k=20&m=1303977605&s=170667a&w=0&h=P5Kio_7K3oGKmheY6QYyeb6I6AdaAI2avS1VYSzeknU=)",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Router>
      <div className={classes.root}>
        <MiniDrawer
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
          open={open}
        />
        <main className={classes.content}>
          <Switch>
            <Route path="/category" component={TableCategory} />
            <Route path="/product" component={TableProduct} />
            <Route path="/" component={TableCategory} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
