import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';



export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
            return true
        } else {
            if(body.msg){
            Swal.fire('Error', body.msg, 'error');
            }else{
              const arrayMensajes = Object.values(body.errors);
                let arrayErrores = [];
              arrayMensajes.map( error => {
                        if(error.msg){
                            arrayErrores = [... arrayErrores , error.msg];
                        }

                });
                const mensajeError = arrayErrores.join("<br>");
            Swal.fire('Error',mensajeError , 'error');
            }
        }
    }
}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }


    }
}

export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        if( body.ok ) {
            console.log(body);
            //console.log(body.name);
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            dispatch( checkingFinish() );
        }
    }
}
export const startCheckRefreshlogin = () => {
    return async(dispatch) => {

        const resp = await fetchConToken( 'auth/isValidToken' );
        const body = await resp.json();

        if( body.ok ) {
           // console.log(body);
            //console.log(body.name);
          //  localStorage.setItem('token', body.token );
         //   localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        }else{
            dispatch(startChecking());

        } 
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });



const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
      //  dispatch( eventLogout() );
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })