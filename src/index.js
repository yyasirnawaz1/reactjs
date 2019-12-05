import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Body from './components/body/Body';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// const message = 'Counter-->';

ReactDOM.render(
  <Router>
    <Header />
    <Body />
    <Footer />
  </Router>,

  document.getElementById('root')
);
