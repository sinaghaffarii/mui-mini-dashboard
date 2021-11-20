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
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let navigate = useNavigate();
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
        .then(() => navigate("/"));
    }
  };

  return (
    <Container>
      <Typography
        marginTop="10px"
        variant="h5"
        component="div"
        color="text.secondary"
      >
        Create a New Note
      </Typography>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 4,
          padding: 4,
          marginTop: 5,
        }}
      >
        <form onSubmit={submitHandler}>
          <TextField
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            error={titleError}
            fullWidth
            variant="outlined"
            sx={{
              margin: "15px auto 0",
            }}
          />
          <TextField
            label="Details"
            onChange={(e) => setDetails(e.target.value)}
            error={detailsError}
            fullWidth
            variant="outlined"
            sx={{
              margin: "15px auto ",
            }}
          />
          <FormControl sx={{ display: "block", marginBottom: 3 }}>
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
            color="secondary"
            variant="contained"
            type="submit"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Create;
