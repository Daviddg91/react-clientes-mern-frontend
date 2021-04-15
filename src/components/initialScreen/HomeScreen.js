 import React from 'react'
 import mernLogo from '../../static/images/mern.jpg';
export const HomeScreen = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
            <h3>Bienvenido</h3>
            </div>
            
                <div className="col-10 m-auto ">
                <img src={mernLogo} alt="Logo" className="col-12" height="100px" />
				  Esta es una aplicacion web desarollada con el Framework React, el cual realiza funcionalidades CRUD explotando una API 
                desarrollada con Express y Mongoose, esta realiza las funcionalidades CRUD conectandose a una base de datos MongoDB en 
                la nube (Mongo Atlas) y respondiendo a los formularios reactivos con validaciones y control de consistencia de datos.
                <br></br>
                Esta aplicación implementa redux y todos sus componentes se comunican con redux para realizar las funcionalidades desarolladas 
                para el CRUD. Incluye login con JWT y registro de usuarios.
                </div>
                
            
            

        </div>
    )
}
