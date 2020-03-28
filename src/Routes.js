import React from 'react';
import { Switch, Route } from 'react-router';
import SignIn from './Component/SignIn/SignIn';
import Home from './Component/Home/Home';


const Routes = () => {
  return (
      <Switch>
          <Route path="/home" component = {Home} exact/> 
          <Route path="/signin" component = {SignIn}/> 
      </Switch>
  );
};

export default Routes;