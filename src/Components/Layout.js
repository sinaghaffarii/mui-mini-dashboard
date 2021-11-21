import React from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar
} from "@material-ui/core";
import {  makeStyles } from '@material-ui/core/styles'
import { useHistory, useLocation } from "react-router-dom";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { teal } from '@material-ui/core/colors'
import Moment from "react-moment";
import joker from '../assets/images/images.jpeg'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      height: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: teal[50],
      borderRight: '2px solid teal'
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: teal[500]
    },
    date: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2),
    },
    icon: {
      color: teal[800]
    }
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined className={classes.icon}/>,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined className={classes.icon}/>,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        position="fixed"
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the <Moment format={"dddd"} />
          </Typography>
          <Typography>Sina Ghaffari</Typography>
          <Avatar className={classes.avatar} src={joker} />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}


export default Layout