import React from 'react'
import {
    Link,
    NavLink
  } from 'react-router-dom';
 


export const Boxhead = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-collapse col-8">
            <div className="navbar-nav">
           
            <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/auth/home"
                >
                    Inicio
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/auth/login"
                >
                    Login
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/auth/about"
                >
                    Informacion
                </NavLink>
                
            </div>
        </div>
    </nav>
    )
}
