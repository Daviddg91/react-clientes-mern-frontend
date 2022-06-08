import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { GenerateTableBody } from './generateTableBody';
import { useDispatch , useSelector} from 'react-redux';
import { clientsStartLoading } from '../../actions/clients'

import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import "datatables.net-dt/css/jquery.dataTables.css";
import 'jquery/dist/jquery.min.js';

 $.DataTable = require('jquery');
require('jquery');
require('datatables.net');
require('datatables.net-dt');
require('datatables.net-responsive');
require('datatables.net-responsive-dt');

export const ClientDashboard = () => {
  const  dispatch = useDispatch();
 // const   clientes = useSelector(state => state.clients.clientes)
 // if(!clientes){
   dispatch( clientsStartLoading() );
//  }
  
const clientesData = useSelector( state => state.clients.clientes);

const [jqueryLoaded, setjqueryLoaded] = useState(false)

  useEffect(() => {
    setjqueryLoaded(true);
  },[$]);


$.fn.dataTable.ext.errMode = 'none';
$( document ).ready(function() {

  $('#buscresult').DataTable({
      responsive: true,
      paging:true,
      searching: true,
      ordering:  true,
      "info": false,
        //para cambiar el lenguaje a español
        "language": {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
                 },
                 "sProcessing":"Procesando...",
            }
    });     
    
  });    
return (
        <div className="col-10 m-auto"> 
         <div className="d-flex justify-content-center " >  <h1>Listado de Clientes </h1> </div>
         {clientesData && <>
           <table id="buscresult" className="table table-bordered table-striped table-hover col-12">
            <thead>
          <tr>
            {/*<th>ID</th>*/}
            <th> <div>Nombre</div></th>
            <th> <div>Apellidos</div></th>
            <th> <div>DNI</div> </th>
            <th> <div>Correo</div></th>
            <th> <div>Telefono</div> </th>
            <th> <div>Direccion</div></th>
            <th> <div>CP</div></th>
            <th> <div>Edad</div></th>
            <th>Editar</th>
            <th>Eliminar</th>
             
          </tr>
             
            </thead>
         
       
    <tbody id="tablebody">
    
      {
                clientesData.map( cliente => (
                   
                    <GenerateTableBody {...cliente} />
                ))
               
      } 
    </tbody>
         </table>
         </>
           }
        </div>
    )
}


