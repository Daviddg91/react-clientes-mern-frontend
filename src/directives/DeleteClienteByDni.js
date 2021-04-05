import React, { useEffect } from 'react'
import { render } from '@testing-library/react';
import { ClientReducer } from '../components/reducers/ClientReducer';
import Window_modal from '../hooks/Window_modal';
import  propTypes from "prop-types"

export const DeleteClienteByDni = (props) => {
  const {dni} = props;

    const action ={
        type:"deleteClient",
        payload:{dni: dni},
    }
     
const deleteDataClients = ClientReducer([], action);
const { urldelete, headersDelete } = deleteDataClients;

 
  useEffect(async () => {
    //const result = await axios.get(urldelete,headersDelete);
    const result = "" ;
    render(<Window_modal mensaje={result.data} />) ;
   
  },[]);

 
     return "";

     DeleteClienteByDni.prototype= {
       dni: propTypes.string.isequired,
      // nombreCliente: propTypes.string
}
}