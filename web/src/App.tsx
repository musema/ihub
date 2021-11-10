import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { IdeaDetails } from './components/Ideas';
import { NavBar } from './components/Nav/NavBar';
import { Home } from './components/Home';

export const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/ideas" />} />
          <Route path="/ideas" exact component={Home} />
          <Route path="/ideas/search" exact component={Home} />
          <Route path="/ideas/:id" exact component={IdeaDetails} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
