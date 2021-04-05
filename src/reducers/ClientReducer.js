import { types } from "../types/types";

const initialState = {
    clients: [],
    activeClient: null
};
 
export const ClientReducer = (state = [], action) => {

            switch ( action.type ) {
                
                case types.clientActiveForUpdate:
                    return {
                        ...state,
                        client: [
                      //      ...state.clients,
                            action.payload
                        ]
                    }
                    
                case types.clientActiveDelete:
                     
                    return {
                        ...state,
                            clientActiveDelete: state.clientes.find((cliente) => cliente.dni === action.payload)
                    }
                case types.clientDesactiveForDelete:
                    return {
                        ...state,
                activeEvent: null
                    }    

                case types.clientUpdated:
                    return {
                        ...state,
                        clients: state.clients.map(
                            e => ( e.id === action.payload.id ) ? action.payload : e
                        )
                    }
                
                case types.clientDeleted:
                    return {
                        ...state,
                            clientes: state.clientes.filter(
                                cliente => ( cliente.dni !== state.clientActiveDelete.dni )
                            ),
                        clientActiveDelete: null 
                        }
                    
        
                case types.clientsLoaded:
                    return {
                        ...state,
                        clientes: [ ...action.payload ]
                    }
        
                case types.clientLogout:
                    return {
                        ...initialState
                    }
                    
                    case types.clientAddNew:
                        return {
                            ...state,
                                clientes: {
                                    ...state.clients.clientes,
                                     ...action.payload
                                }
                        }
                        
                case types.searchClientById:
                    return {
                        ...state,
                        clienteModify: state.clients.clientes.find((item) => item.id === action.payload.id ? item : false)
                    }
                default:
                    return state;
            }
        
        
        
}
