import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { pink, blue, green, teal, purple } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStayles = makeStyles({
  cardborder: {
    borderRadius: "10px",
    boxShadow:
      " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "work") {
        return teal[500];
      }
      if (note.category === "reminder") {
        return blue[500];
      }
      if (note.category === "todos") {
        return green[500];
      }
      return purple[500];
    },
  },
  iconButton: {
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "10px",
    "&:hover": {
      borderRadius: "10px",
    },
  },
});

const CreateNote = ({ note, handleDelete }) => {
  const classes = useStayles(note);

  return (
    <Card elevation={0} className={classes.cardborder}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            className={classes.iconButton}
            onClick={() => handleDelete(note.id)}
          >
            <DeleteOutlineIcon sx={{ color: pink[500] }} />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CreateNote;
