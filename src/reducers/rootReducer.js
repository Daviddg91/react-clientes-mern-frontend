
import { combineReducers } from 'redux';

import { ClientReducer } from './ClientReducer';

import { AuthReducer } from './AuthReducer';



export const rootReducer = combineReducers({
    auth: AuthReducer,
    clients: ClientReducer,
})