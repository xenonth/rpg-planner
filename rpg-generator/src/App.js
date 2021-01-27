import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderNav from './components/navbar';

import GeneratorPage from './pages/GeneratedTown';
import Home from './pages/Home';
import SubmitIdea from './pages/SubmitIdea';

function App() {
  return (
    <Router>
      <HeaderNav />
      <p></p>
      <Switch>
        
        <Route exact path ="/" component={Home} />
        <Route exact path ="/home" component={Home} />
        <Route exact path="/random" component={GeneratorPage} />
        <Route exact path="/custom" component={SubmitIdea} />
      </Switch>

    </Router>
  );
}

export default App;
