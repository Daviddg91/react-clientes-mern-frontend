import React from 'react';
import {  NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const NavBarClientes = () => {
    const dispatch = useDispatch();
 
    const handleAuthRdirect = () =>{
        dispatch(startLogout());
      }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-collapse col-6">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link btn btn-primary ml-3" 
                        exact
                        to="/clientes/dashboardClient"
                    >
                        Lista de Clientes
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link btn btn-primary ml-3" 
                        exact
                        to="/clientes/newClient"
                    >
                        Nuevo Cliente
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 col-6">
                <ul className="navbar-nav ml-auto">

                <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link btn btn-warning " 
                        exact
                        to=""
                        onClick={handleAuthRdirect}
                    >
                        Volver
                    </NavLink>
                </ul>
            </div>

        </nav>
    )
}
