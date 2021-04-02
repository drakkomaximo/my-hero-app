import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import loginScreen from '../components/login/loginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/login" component={ loginScreen } />
              <Route path="/" component={ DashboardRoutes } />
            </Switch>
          </div>
        </Router>
      );
}

export default AppRouter
