import React from "react";
import {
  Drawer,
  Divider,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate, useLocation  } from "react-router-dom";
import { teal } from "@mui/material/colors";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: "100%",
      background: "#f9f9f9",
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
    title: {
      padding: theme.spacing(2),
    },
    active: {
      borderRight: '2px solid teal',
      background: teal[500],
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation()

  const menuItem = [
    {
      text: "My notes",
      icon: <SpeakerNotesIcon color="secondary" />,
      path: "/",
    },
    {
      text: "Create notes",
      icon: <NoteAddIcon color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* // ---- App Bar  */}

      {/* // ---- Side Drawer */}
      <Drawer
        className={classes.drawer}
        anchor="left"
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h5" className={classes.title}>
          Sina's Notes
        </Typography>
        <Divider />
        <List>
          {menuItem.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => navigate(item.path)}
              className={location.pathname ==  item.path ? classes.active : null}
              button
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* // ---- main Content */}
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
