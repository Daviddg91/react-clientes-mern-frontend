import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { clientStartAddNew } from '../../actions/clients';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import V from 'max-validator';
import {isDni } from '../../helpers/custom_validators';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export const NewClient = () => {
  let clienteObject = {
    nombre:"",
    apellidos:"",
    edad:"",
    dni:"",
    correo:"",
    telefono:"",
    cp:"",
    direccion:"",
    correo:"",
     }

const [ values, handleChange , reset ] = useForm(clienteObject);
 
const history = useHistory();

function refreshPage() {
  window.location.reload(false);
}

 const objetoValidateErrors = {
   errors : {
    nombre : '',
    apellidos : '',
    edad : '',
    direccion :'',
    dni : '',
    cp  : '',
    telefono : '',
    correo : '',
    }
 };
 const [validateErrors, setValidateErrors] = useState(objetoValidateErrors);
 

useEffect( () => {
  setValidateErrors(objetoValidateErrors);
  //console.log(values)
  if (values.cp !== ''){
    values.cp = Number.parseInt(values.cp);

  }
  if (values.telefono !== ''){
    values.telefono = Number.parseInt(values.telefono);

  }
  if (values.edad !== ''){
    values.edad = Number.parseInt(values.edad);
  }

  const validateErrors =  V.validate(values, {
    nombre     : 'required|string|min:2|max:30',
    apellidos : 'required|string|min:2|max:30',
    direccion: 'required|string|min:2|max:30',
    edad      : 'required|numeric|min:18|max:100',
    telefono : 'required|numeric|min:99999|max:999999999',
    correo    : 'required|email|max:50',
    dni : 'required|isDni',
    cp: 'required|numeric|min:1000|max:999999',
  });
  //console.log(validateErrors);
  setValidateErrors(validateErrors);
  validateRepeatDni(values.dni)
}, [values]);

const validateRepeatDni = async(value) => {
  if(value.length === 9){
    if(validateErrors.errors.dni !== null){
      
          const baseUrl = process.env.REACT_APP_API_URL;
          const url = ` ${baseUrl}/clients/getClient/${value}`;
          const token = localStorage.getItem('token') || '';
          const request =    {
              'mode': 'cors', // no-cors, *cors, same-origin
              'cache': 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              'credentials': 'same-origin', // include, *same-origin, omit
              'headers': {
                'Content-Type': 'application/json',
                'x-token': token
              },
            }
          const fetchDniClient = await axios.get(url, request);
          if(fetchDniClient){
            if(fetchDniClient.data.cliente.length > 0){
                validateErrors.errors.dni = "El DNI esta repetido" ;
                setValidateErrors(validateErrors);
            }
          }
      }
  }
}
const dispatch = useDispatch();
const handleSubmit = async(e) => {
  e.preventDefault();
  
    try {
     dispatch( clientStartAddNew( values ));
      setTimeout(() => {
        reset();
      }, 2000);
    } catch (error) {  
    Swal.fire('Error', error, 'error');
    }
  }
 

   return (
          <>
  <div id="">
      <div className="d-flex justify-content-center " > <h1><p>Crear nuevo usuario</p></h1> </div>
        <form onSubmit={handleSubmit}>
               
               <div className="col-10 creaClienteForm m-auto">
              <div className="">
                  <label htmlFor="nombre" >Nombre: </label>
                  <input value={values.nombre}
                    type="text" 
                    className={
                       `form-control 
                        ${values.nombre !== '' && 
                        !validateErrors.errors.nombre ?  "is-valid" : ""}
                        ${values.nombre !== '' && 
                        validateErrors.errors.nombre ?  "is-invalid" : ""}
                      `
                      }
                     name="nombre" 
                     placeholder="Ingresar Nombre"
                     onChange={handleChange}
                    />
              </div>
              <div 
              className={
                `alert  alert-danger 
                 ${ validateErrors.errors.nombre && values.nombre !== '' ? "displayBlock" : "displayNone"} 
               `
               }
              >
               { validateErrors.errors.nombre && <> { validateErrors.errors.nombre}</>}
              </div>
               <br/>
              <div className="">
                  <label htmlFor="apellidos" >Apellidos: </label>
                  <input  
                  value={values.apellidos} type="text" 
                  className={
                    `form-control 
                    ${values.apellidos !== '' && 
                    !validateErrors.errors.apellidos ?  "is-valid" : ""}
                    ${values.apellidos !== '' && 
                    validateErrors.errors.apellidos ?  "is-invalid" : ""}
                   `
                   }
                   name="apellidos" placeholder="Ingresar Apellidos"
                   onChange={handleChange}
                    />
              </div>
              <div 
              className={
                `alert  alert-danger 
                ${ validateErrors.errors.apellidos && values.apellidos !== '' ? "displayBlock" : "displayNone"} 
               `
               }
              >
               { validateErrors.errors.apellidos && <> { validateErrors.errors.apellidos}</>}
                
              </div>
               <br/>
              <div className="form group"> 
                  <label htmlFor="edad" >Edad: </label>
                  <input 
                   value={values.edad} type="number"
                   className={
                    `form-control 
                    ${values.edad !== '' && 
                    !validateErrors.errors.edad ?  "is-valid" : ""}
                    ${values.edad !== '' && 
                    validateErrors.errors.edad ?  "is-invalid" : ""}
                   `
                   }
                   
                   name="edad" placeholder="Ingresar edad" 
                   onChange={handleChange}
                   />
              </div>
              <div 
              className={
                `alert  alert-danger 
                ${ validateErrors.errors.edad && values.edad !== '' ? "displayBlock" : "displayNone"} 
               `
               }
              >
                { validateErrors.errors.edad && <> { validateErrors.errors.edad}</>}
                 
              </div>
                <br/>
              <div className="form group">
                  <label htmlFor="direccion" >Direccion: </label>
                  <input 
                   value={values.direccion}  type="text" 
                  className={
                    `form-control 
                    ${values.direccion !== '' && 
                    !validateErrors.errors.direccion ?  "is-valid" : ""}
                    ${values.direccion !== '' && 
                    validateErrors.errors.direccion ?  "is-invalid" : ""}
                   `
                   }
                   
                   name="direccion" placeholder="Ingresar direccion" 
                   onChange={handleChange}
                   />
              </div>
              <div 
              className={
                `alert  alert-danger 
                ${ validateErrors.errors.direccion && values.direccion !== '' ? "displayBlock" : "displayNone"} 
               `
               }
              >
                { validateErrors.errors.direccion && <> { validateErrors.errors.direccion}</>}
                  
              </div>
                <br/>
              <div className="form group">
                  <label htmlFor="dni" >DNI: </label>
                  <input 
                  value={values.dni}  type="text"
                   className={
                    `form-control 
                    ${values.dni !== '' && 
                    !validateErrors.errors.dni ?  "is-valid" : ""}
                    ${values.dni !== '' && 
                    validateErrors.errors.dni ?  "is-invalid" : ""}
                   `
                   }
                   
                    name="dni" placeholder="Ingresar dni" 
                    onChange={handleChange}
                    />
              </div>
              <div 
              className={
                `alert  alert-danger 
                ${ validateErrors.errors.dni && values.dni !== '' ? "displayBlock" : "displayNone"}  
               `
               }
              >
                 { validateErrors.errors.dni && <> { validateErrors.errors.dni}</>}
                
              </div>
                <br/>
              <div className="form group">
                  <label htmlFor="cp" >Codigo Postal: </label>
                  <input 
                  
                  value={values.cp}  type="text" 
                  className={
                    `form-control 
                    ${values.cp !== '' && 
                    !validateErrors.errors.cp ?  "is-valid" : ""}
                    ${values.cp !== '' && 
                    validateErrors.errors.cp ?  "is-invalid" : ""}
                   `
                   }
                   
                  name="cp" placeholder="Ingresar cp" 
                  onChange={handleChange}
                  />
              </div>
              <div 
              className={
                `alert  alert-danger 
                ${ validateErrors.errors.cp && values.cp !== '' ? "displayBlock" : "displayNone"} 
               `
               }
              >
                { validateErrors.errors.cp && <> { validateErrors.errors.cp}</>}
                  
              </div>
                <br/>
              <div className="form group">
                  <label htmlFor="telefono" >Telefono: </label>
                  <input 
                   value={values.telefono}  type="number" 
                  className={
                    `form-control 
                    ${values.telefono !== '' && 
                    !validateErrors.errors.telefono ?  "is-valid" : ""}
                    ${values.telefono !== '' && 
                    validateErrors.errors.telefono ?  "is-invalid" : ""} 
                   `
                   }
                   
                  name="telefono" placeholder="Ingresar telefono" 
                  onChange={handleChange}
                  />
              </div>
              <div 
              className={
                `alert  alert-danger 
                ${ validateErrors.errors.telefono && values.telefono !== '' ? "displayBlock" : "displayNone"}  
               `
               }
              >
                { validateErrors.errors.telefono && <> { validateErrors.errors.telefono}</>}
                 
              </div>
               <br/>
              <div className="form group">
                  <label htmlFor="correo" >Correo: </label>
                  <input 
                  value={values.correo}  type="email" 
                  className={
                    `form-control 
                    ${values.correo !== '' && 
                    !validateErrors.errors.correo ?  "is-valid" : ""}
                    ${values.correo !== '' && 
                    validateErrors.errors.correo ?  "is-invalid" : ""}
                   `
                   } 
                   
                  name="correo" placeholder="Ingresar correo" 
                  onChange={handleChange}
                  />
              </div>
              <div 
              className={
                `alert  alert-danger 
                ${ validateErrors.errors.correo && values.correo !== '' ? "displayBlock" : "displayNone"} 
               `
               }
              >
                { validateErrors.errors.correo && <> { validateErrors.errors.correo}</>}
                  
              </div>
                <br/>
              <button type="submit" 
              className={`btn btn-primary 
              ${validateErrors.hasError ? "btn-secondary" : "btn-primary"}
              `}
              disabled={validateErrors.hasError}
              >
                Crear usuario
                </button>
              </div>
              </form>
              </div>
    </>

  

 );


}