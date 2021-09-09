import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import HireMe from './components/pages/HireMe';
import Hobbies from './components/pages/Hobbies';
import Socials from './components/pages/Socials';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/hire-me' component={HireMe}/>
        <Route path="/hobbies" component={Hobbies}/>
        <Route path="/socials" component={Socials}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
