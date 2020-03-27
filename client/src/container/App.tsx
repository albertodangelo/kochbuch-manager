import React, {useState} from 'react';
import { UsersContainer} from './UsersContainer';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { DashboardContainer } from './DashboardContainer';
import { ParametersContainer } from './ParametersContainer';
import { KochbuchContainer } from './KochbuchContainer';

export const App: React.FC = () => {

  return (
    <BrowserRouter>
    <div className="App" >
      <Switch>
        <Route path="/" exact={true} component={DashboardContainer} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/kochbuch" component={KochbuchContainer} />
        <Route path='/parameters/:id' component={ParametersContainer} />
      </Switch>
    </div>
    </BrowserRouter>
  )

 
}
