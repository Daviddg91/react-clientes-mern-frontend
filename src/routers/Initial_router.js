import React from 'react'
import {Dashboard_router} from './Dashboard_router';
import { Auth_router } from './Auth_router';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { useEffect } from 'react';
 
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
      
  }, [dispatch])

  if ( checking ) {
      return (<h5>Espere...</h5>);
  }


  return  ( 
        <>
<Router history={history}>        
  <Switch>
    
  { !!uid ? <Dashboard_router /> : <Auth_router /> }
           
  <Redirect to="/" />   
  </Switch>
</Router>
</>
);
}
