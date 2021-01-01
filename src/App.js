import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import NewPlace from './places/components/NewPlace.component'
import NewUser from './users/pages/Users.component'

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path='/' exact>
          <NewPlace/>
        </Route>  
        <Route path='/users/new' exact>
          <NewUser/>
        </Route>  
        <Redirect to='/'/>
      </Switch>
  </Router>
  );
};

export default App;
