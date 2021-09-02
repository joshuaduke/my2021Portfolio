import React from 'react';

import AboutMe from './Components/About/AboutMe'
import Portfolio from './Components/Projects/Portfolio';

import {BrowserRouter as Router,
        Switch,
        Route,
        Link 
        } from 'react-router-dom';




function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/Portfolio" component={Portfolio}/>
          <Route exac path="/" component={AboutMe}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    </main>

  );
}

/* <div className={classes.root}>
      <Navbar/>
      <main className={classes.content}>
        <AboutMe/>
      </main>
    </div> */


export default App;
