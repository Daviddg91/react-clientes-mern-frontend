import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    
  } from 'react-router-dom';
import {HomeScreen} from '../components/initialScreen/HomeScreen';
import {AboutScreen} from '../components/initialScreen/AboutScreen.js';
import {LoginScreen} from '../components/initialScreen/LoginScreen';
import { Boxhead } from '../components/initialScreen/Boxhead';

export const Auth_router = () => {
    return (
        <Router>
         <div className="auth__main">
            <div className="auth__box-container col-6">
                <div className="auth__boxhead2">
                  <Boxhead />
                </div>
                <Switch>
                    <Route exact path="/auth/home" component={ HomeScreen } />
                    
                    <Route exact path="/auth/about" component={ AboutScreen } />
                    <Route exact path="/auth/login" component={ LoginScreen } />
                    
                    <Redirect to="/auth/home" /> 

                </Switch>
            </div>
        </div>
    </Router>
    )
}
