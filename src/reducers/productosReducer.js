import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types';

//cada reducer tiene su propio state 
const initialState = {
    productos: [],
    error: null,
    loading: false
}


export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                error: null
            }
            case AGREGAR_PRODUCTO_EXITO:
                return {
                    ...state,
                    error: null,
                    productos: [...state.productos, payload]
                }
            case AGREGAR_PRODUCTO_ERROR:
                return {
                    ...state,
                    error: true
                }
            default: 
            return state;

    }
}