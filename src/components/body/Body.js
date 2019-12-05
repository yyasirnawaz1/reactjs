import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Books from '../books/Books';
import Courses from '../courses/Courses';
import Home from '../home/Home';

const Body = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/Books'>
        <Books />
      </Route>
      <Route path='/Courses'>
        <Courses />
      </Route>
    </Switch>
  );
};

export default Body;
