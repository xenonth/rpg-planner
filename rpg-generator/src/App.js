import React from 'react';

// imported for user authentication
import { BrowserRouter as Router, Route} from "react-router-dom";

//import page files 
import GeneratorPage from './pages/GeneratedTown';
import Home from './pages/Home';
import SubmitIdea from './pages/SubmitIdea';
import SignUp from './pages/SignUp';
import DashBoard from './pages/DashBoard';

//components which sit outside the main page
import Header from './components/Header';

function App() {

  return (
    <Router>
      <Header />
        <Route exact path ="/" component={Home} />
        <Route exact path ="/home" component={Home} />
        <Route exact path="/random" component={GeneratorPage} />
        <Route exact path="/custom" component={SubmitIdea} />
        <Route exact path="/login" component={SignUp} />
        <Route exact path="/dashboard" component={DashBoard} />
    </Router>
  );
}

export default App;
