import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './screens/Main';

function App() {
  return (
    <Router>
      <Route exact path="/portfolio" component={Main} />
    </Router>
  );
}

export default App;