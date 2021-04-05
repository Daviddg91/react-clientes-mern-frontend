import Swal from 'sweetalert2';

import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';




export const clientStartAddNew = ( client ) => {
    return async( dispatch, getState ) => {

        try {
            const resp = await fetchConToken('clients', client, 'POST');
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( clientAddNew( client ) );
            }
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: ` El cliente  ${client.nombre}  se ha creado con exito `,
                showConfirmButton: false,
                timer: 2300
              }); 

        } catch (error) {
            Swal.fire('Error', error, 'error');
        }

        

    }
}



const clientAddNew = (client) => ({
    type: types.clientAddNew,
    payload: client
});



export const clientStartUpdate = ( client ) => {
    return async(dispatch) => {

        try {
            const resp = await fetchConToken(`clients/${ client.id }`, client, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( clientUpdated( client ) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}

const clientUpdated = ( client ) => ({
    type: types.clientUpdated,
    payload: client
});
 

export const clientStartDelete = (dni) => {
    return async ( dispatch, getState ) => {
        dispatch(clientActiveDelete(dni));
        
        const clienteActivo = getState().clients.clientActiveDelete;

         await Swal.fire({
            title: `¿ Esta seguro que desea borrar el cliente  ${clienteActivo.nombre} ?`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Aceptar`,
            denyButtonText: `Cancelar`,
            allowOutsideClick: false
          }).then( async (result) => {
            if (result.isConfirmed) {
                try {
                    const resp = await fetchConToken(`clients/${ clienteActivo.dni }`, {}, 'DELETE' );
                    const body = await resp.json();
        
                    if ( body.ok ) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `El cliente  ${clienteActivo.nombre}  se ha borrado con exito `,
                            showConfirmButton: false,
                            timer: 2300
                          }); 
                        dispatch( clientDeleted() );
                       
                    } else {
                        Swal.fire('Error', body.msg, 'error');
                    }
                } catch (error) {

                    Swal.fire('Error', error, 'error');
                }     
            } else if (result.isDenied) {
                dispatch( clientDesactiveForDelete() );
            }
          })

    }
}
 
 
const clientDesactiveForDelete = () => ({ type: types.clientDesactiveForDelete });
const clientDeleted = () => ({ type: types.clientDeleted });
const clientActiveDelete = (dni) => ({ type: types.clientActiveDelete , payload: dni });

export const clientsStartLoading = () => {
    return async(dispatch) => {

        try {
            
            const resp = await fetchConToken( 'clients' );
            const body = await resp.json();
            const clients = body.clientes;
            
            dispatch( clientsLoaded( clients ) );

        } catch (error) {
            console.log(error)
        }

    }
}

const clientsLoaded = (clientes) => ({
    type: types.clientsLoaded,
    payload:  clientes ,
})

export const clientActiveForModify = (dni) => {
    return async(dispatch) => {
       
        try {
            
            const resp = await fetchConToken( `clients/getClients/${dni}` );
            const body = await resp.json();
            const client = body.clientes;
            console.log(body)
            dispatch( clientsModifyActive( client ) );

        } catch (error) {
            console.log(error)
        }

    }
}

export const clientsModifyActive = (client) => ({
    type: types.clientActiveForUpdate,
    payload: client
});

export const findClientByDni = (dni) => {
    return async ( dispatch, getState ) => {

        let bool = "";
        try {
          
          bool = dispatch(clientExistByDni (dni)); 
            console.log(bool)

        } catch (error) {
            console.log(error)
        }

    }
}
const clientExistByDni = (dni) => ({
    type: types.clientExistByDNI,
    payload: dni
});

export const searchClientByIdAction = ( id ) => {
    return ( dispatch, getState ) => {
        try {
         dispatch(searchClientByIdRedux(id)); 
        } catch (error) {
            console.log(error)
        }

    }
   
}
    const searchClientByIdRedux = (id) => ({
        type: types.searchClientById,
        payload: id
    });

 
