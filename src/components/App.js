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

// import React, { useState } from 'react';
// import TextBoxControl from './TextBoxControl';

// function App(props) {
//   const [counter, setCounter] = useState(0);

//   const updateCounter = val => {
//     setCounter(parseInt(val));
//   };

//   return (
//     <div>
//       <TextBoxControl
//         id='testid'
//         name='testid'
//         placeholder='test textbox'
//         updateCounter={updateCounter}
//       ></TextBoxControl>
//       <br />
//       {props.message} {counter}
//       <br /> <br />{' '}
//       <button onClick={() => setCounter(counter + 1)}>Increase Number</button>
//     </div>
//   );
// }

// export default App;
