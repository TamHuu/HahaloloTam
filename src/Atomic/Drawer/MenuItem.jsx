import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ShopOutlined } from "@material-ui/icons";
import React from "react";
import MailIcon from "@material-ui/icons/Mail";

const MenuItem = ({ text, index }) => {
  return (
    <ListItem button key={text}>
      <ListItemIcon>
        {index % 2 === 0 ? <ShopOutlined /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default MenuItem;
