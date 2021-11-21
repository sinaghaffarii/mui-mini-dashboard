import React, { useState } from "react";
import {
  Typography,
  Container,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  page: {
    width: "100%",
    height: "100%",
  },
  noteBox: {
    marginTop: 10,
    border: "2px dashed rgba(0 0 0 / 0.2)",
    borderRadius: "10px",
    padding: "15px",
    backgroundColor: "#ffffff",
    // boxShadow:
    //   " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
  },
  field: {
    display: "block",
    margin: "20px auto",
  },
  title: {
    margin: "10px",
  },
  btn: {
    backgroundColor: teal[500],
    color: '#ffffff',
    marginTop: "10px",
    marginBottom: "10px",
    '&:hover': {
      backgroundColor: teal[600]
    },
    '&:active': {
      backgroundColor: teal[400]
    }
  },
});

const Create = () => {
  const classes = useStyles();
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");

  const submitHandler = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details && category) {
      axios
        .post("http://localhost:8000/notes", {
          title,
          details,
          category,
        })
        .then(() => history.push("/"));
    }
  };

  return (
    <Container className={classes.page}>
      <Typography
        variant="h5"
        component="div"
        color="text.secondary"
        className={classes.title}
      >
        Create a New Note
      </Typography>
      <Box className={classes.noteBox}>
        <form onSubmit={submitHandler}>
          <TextField
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            error={titleError}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Details"
            onChange={(e) => setDetails(e.target.value)}
            className={classes.field}
            error={detailsError}
            fullWidth
            variant="outlined"
          />
          <FormControl className={classes.field}>
            <FormLabel>Note Categories</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="money"
                label="money"
                control={<Radio />}
              />
              <FormControlLabel
                value="work"
                label="work "
                control={<Radio />}
              />
              <FormControlLabel
                value="reminder"
                label="reminder"
                control={<Radio />}
              />
              <FormControlLabel
                value="todos"
                label="todos"
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            endIcon={<KeyboardArrowRightIcon />}
            className={classes.btn}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Create;
