import React from 'react'
import {Dashboard_router} from './Dashboard_router';
import { Auth_router } from './Auth_router';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking , startCheckRefreshlogin } from '../actions/auth';
import { useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';


export const Initial_router = () => {

  const dispatch = useDispatch();
  const { checking, uid } = useSelector( state => state.auth);
  
  const history = useHistory();
 useEffect(() => {
     
      dispatch( startChecking() );
    dispatch(startCheckRefreshlogin());
  }, [dispatch])


  if ( checking ) {
      return (<h5>Espere...</h5>);
  }

  return  ( 
        <>
         <Router history={history}>
            <div>
                <Switch> 
                    <PublicRoute 
                        
                        path="/auth" 
                        component={ Auth_router } 
                        isAuthenticated={ !!uid }
                    />
                    
                    <PrivateRoute 
                        path="/clientes" 
                        component={ Dashboard_router } 
                        isAuthenticated={ !!uid }
                    />
                    <Redirect to="/auth" />
                </Switch>
            </div>
            </Router>


</>
);
}
