import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR,
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
            case DESCARGA_PRODUCTOS_EXITOSA:
                return {
                    ...state,
                    productos: payload,
                    loading: false,
                    error: false

                }
            case DESCARGA_PRODUCTOS_ERROR:
                return {
                    ...state,
                    productos: [],
                    error : true,
                    loading: false

                }
            default: 
            return state;

    }
}