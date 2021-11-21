import React from "react";
import { Create, Notes } from "./Pages";
import { BrowserRouter as Router,
  Switch,
  Route,} from "react-router-dom";
import Layout from "./Components/Layout";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Comfortaa",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact ><Notes/></Route>
            <Route path="/create"><Create/></Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
