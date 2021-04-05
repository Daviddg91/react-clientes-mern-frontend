import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export const GenerateTableBody = (cliente) => {
 
    const eliminar = (
        <NavLink
        type="button" 
        className="btn btn-success"  
        exact
        to={`/clientes/deleteClient/${ cliente.dni }` }
        key = {`eliminar${cliente.id}`}
        >
            Eliminar
       </NavLink>
    );
     const editar = (
        <NavLink
         type="button"  
         className="btn btn-success"  
         exact
         to={`/clientes/modifyClient/${ cliente.id }` }
         key ={`editar${cliente.id}`}
         
         >
             Editar
        </NavLink>
        );
        
    return (
        <tr key={cliente.id}>
       {/* <td >
            <div>    {cliente.id}    </div></td> */ }
        
       <td> 
            <div>    {cliente.nombre }    </div></td>
       
        <td>
            <div>    {cliente.apellidos}    </div></td>
        
        <td>
            <div>    {cliente.dni}    </div></td>
        
        <td>
            <div>    {cliente.correo}    </div></td>
       
        <td>
            <div>    {cliente.telefono}   </div> </td>
        
        <td>
            <div>    {cliente.direccion}    </div> </td>
       
        <td>
            <div>    {cliente.cp}   </div> </td>
        
        <td>
            <div>    {cliente.edad }   </div></td>
        
        <td>
            <div>     {editar}    </div></td>
        
        <td>
            <div>     {eliminar}    </div></td>
        
    </tr>         
    
    );
}
