// Render parent

import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import { GetAllActivities, GetAllRoutines, Homepage } from "./components";


const App = () => {
    const [activities, setActivities] = useState([]);
    const [routines, setRoutines] = useState([]);

    return (
      <Router>
          <div className='App'>
              <Switch>
                  <Route exact path='/'>
                      <Homepage/>
                  </Route>
                  <Route path='/activities'>
                      <GetAllActivities activities={activities} setActivities={setActivities} />
                  </Route>
                  <Route path='/routines'>
                      <GetAllRoutines routines={routines} setRoutines={setRoutines} />
                  </Route>
              </Switch>
          </div>
    </Router>
    )
  };
  
  ReactDOM.render(<App />, document.getElementById("app"));