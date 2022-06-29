import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rules from "../pages/pageRules";
import DenseTable from "../pages/pageManager";
import Register from "../pages/pageRegister";
import Album from "../pages/listCandicates";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          style={{ backgroundColor: "mediumvioletred" }}
        >
          <Tab
            style={{ color: "ghostwhite" }}
            label=" Thể Lệ"
            {...a11yProps(0)}
          />
          <Tab
            style={{ color: "ghostwhite" }}
            label="Đăng Ký Dự Thi"
            {...a11yProps(1)}
          />
          <Tab
            style={{ color: "ghostwhite" }}
            label="Danh Sách Thí Sinh"
            {...a11yProps(2)}
          />
          <Tab
            style={{ color: "ghostwhite" }}
            label="Quản lý Thí Sinh"
            {...a11yProps(3)}
          />
          <div className="logo">
            <img
              src="http://hhvn.com.vn/wp-content/uploads/2020/05/Logo-HHVn2020-1024x294.png"
              style={{ width: "200px", marginLeft: "500px" }}
            ></img>
          </div>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Rules/>
 
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Register/>
      </TabPanel>
      <TabPanel value={value} index={2}>
     <Album/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <DenseTable/>
      </TabPanel>
    </div>
  );
}
