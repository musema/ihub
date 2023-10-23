import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { IdeaDetails } from "./components/ideas";
import { Home } from "./components/home";
import { Auth } from "./components/auth/auth";
import { Layout } from "./components/layout/layout";
import { IdeaForm } from "./components/ideaForm/ideaForm";
import { lime } from "@mui/material/colors";

export const App = () => {
  let theme = createTheme({
    palette: {
      primary: {
        main: lime[500],
      },
      secondary: {
        // main: '#39395f',
        main: lime[500],
      },
    },
  });
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route
                path="/"
                exact
                component={() => <Redirect to="/ideas" />}
              />
              <Route path="/ideas" exact component={Home} />
              <Route path="/ideas/create" exact component={IdeaForm} />
              <Route path="/ideas/search" exact component={Home} />
              <Route path="/ideas/:id" exact component={IdeaDetails} />
              <Route path="/auth" exact component={Auth} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
};
