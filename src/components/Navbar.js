import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom"


import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import avatar from "../images/avatar.png";

// css styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.543m auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"

  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider,open) => () => {
      setState({...state,[slider]:open})
  }

  const classes = useStyles();
  const sideList = (slider) => (
    <Box className={classes.menuSliderContainer} component="div"
        onClick={toggleSlider("right",false)}>
      <Avatar className={classes.avatar} src={avatar} alt="Dan Ly" />
      <Divider />
      <List>
        {menuItems.map((lstItem, key) => (
          <ListItem button key={key} component={Link} to={lstItem.listPath || ""}>
            <ListItemIcon className={classes.listItem}>
              {lstItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lstItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right",true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>

            <MobilRightMenuSlider 
            open={state.right} 
            anchor="right" 
            onClose={toggleSlider("right",false)}>
                {sideList("right")}
            </MobilRightMenuSlider>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
