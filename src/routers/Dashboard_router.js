 import React from 'react'
 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import {ClientDashboard} from "../components/clientScreen/ClientDashboard"
import {NewClient} from "../components/clientScreen/NewClient"
import {ModifyClient} from "../components/clientScreen/ModifyClient"
import { NavBarClientes } from '../components/clientScreen/NavBarClientes';
import { DeleteClients } from '../components/clientScreen/DeleteClients';
 
import { useSelector } from 'react-redux';
import { LocationListener } from '../helpers/LocationListener';
 
 export const Dashboard_router = () => {

     return (
         <>
  <Router >
         <NavBarClientes />
         <LocationListener />
        <div>
            <div className="">
                <Switch>
                <>
                    <Route exact  path="/clientes/newClient" component={ NewClient } />
                    <Route exact  path="/clientes/modifyClient/:id" component={ ModifyClient } />
                    <Route exact  path="/clientes/dashboardClient" component={ ClientDashboard } />
                    <Route exact  path="/clientes/deleteClient/:dni" component={ DeleteClients } />
                    <Redirect to="/clientes/dashboardClient" /> 

                </>
                </Switch>
            </div>
        </div>
    </Router>
         </>
     )
 }
 