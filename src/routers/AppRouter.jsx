import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContex';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

  const { heroUser} = useContext( AuthContext )

    return (
        <Router>
          <div>
            <Switch>
              <PublicRoute 
                exact 
                path="/login" 
                component={ LoginScreen } 
                isAuthenticated={ heroUser.logged }
                />
              <PrivateRoutes 
                path="/" 
                component={ DashboardRoutes } 
                isAuthenticated={ heroUser.logged }
                />
            </Switch>
          </div>
        </Router>
      );
}

export default AppRouter
