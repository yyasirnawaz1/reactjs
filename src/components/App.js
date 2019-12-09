import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BooksPage from './pages/BooksPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/Books'>
        <BooksPage />
      </Route>
      <Route path='/Courses'>
        <CoursesPage />
      </Route>
    </Switch>
  );
};

export default App;
