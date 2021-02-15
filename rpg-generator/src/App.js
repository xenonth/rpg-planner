import React from 'react';

// imported for user authentication
import { BrowserRouter as Router, Route} from "react-router-dom";

//import page files 
import GeneratorPage from './pages/GeneratedTown';
import Home from './pages/Home';
import SubmitIdea from './pages/SubmitIdea';
import WelcomeUser from './components/WelcomeUser';

//components which sit outside the main page
import Header from './components/Header';





function App() {

  return (
    <Router>
      <Header />
      <WelcomeUser />
        <Route exact path ="/" component={Home} />
        <Route exact path ="/home" component={Home} />
        <Route exact path="/random" component={GeneratorPage }/>
        <Route exact path="/custom" component={SubmitIdea} />

    </Router>
  );
}

export default App;
