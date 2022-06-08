
import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux';
import {startLogin} from '../../actions/auth'
 
export const LoginScreen = () => {
const dispatch = useDispatch();

const [ FormLoginValues, handleInputChange, reset ] = useForm({email : 'prueba2@prueba.com' , password : '1234567' });


const {email , password } = FormLoginValues;

const loginInputForm = async(e) => {
e.preventDefault();
    
 dispatch( startLogin( email, password ) );

}




    return (
        < >
            <h3 className="auth__title">Login</h3>

<form  >

    <input 
        type="text"
        placeholder="Email"
        name="email"
        className="auth__input"
        autoComplete="off"
        onChange={handleInputChange}
        value={email}
    />

    <input 
        type="password"
        placeholder="Password"
        name="password"
        className="auth__input"
        onChange={handleInputChange}
        value={password}
    />


    <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={loginInputForm}
    >
        Login
    </button>
    </form>
        </ >
    )
}
