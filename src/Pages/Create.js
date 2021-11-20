import React from "react";
import { Typography, Container, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  border: "1px solid",
  marginTop: '10px',
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

const Create = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        marginTop="10px"
        variant="h5"
        component="div"
        color="text.secondary"
      >
        ساختن یک نوت جدید
      </Typography>                                                                                           
      <form>
        <TextField margin="normal" variant="outlined" label="عنوان" fullWidth sx={{textAlign: 'end'}} />                                      
        <TextField                                                                                                                                                                                                                                                                                        
          variant="outlined"
          label="توضیحات"                                                                                                                                                                       
          margin="normal"
          fullWidth
          multiline
          rows={4}
        />
        <BootstrapButton
          size="medium"
          className={classes.root}
          variant="contained"
        >
          ایجاد کردن
        </BootstrapButton>
      </form>
    </Container>
  );
};

export default Create;
