import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// const message = 'Counter-->';

ReactDOM.render(
  <Router>
    <Header />
    <App />
    <Footer />
  </Router>,

  document.getElementById('root')
);
