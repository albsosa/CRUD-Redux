import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types';
//crear nuevo producto - Funcion principal
import clienteAxios from '../config/axios';

export function crearNuevoProductoAction(producto) {
    return(dispatch) => {
        dispatch(nuevoProducto())

        //Insertar en la API
        clienteAxios.post('/libros', producto)
        .then(respuesta =>{
            console.log(respuesta);
            //Si se inserta correctamente hace dispatch 
            dispatch(agregarProductoExito(producto))
        }).catch(error => {
            console.log(error);
            dispatch(agregarProductoError())
            
        });

        
    }
}
export const nuevoProducto = () =>({
    type: AGREGAR_PRODUCTO
});

export const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

export const agregarProductoError = () => ({
    type: AGREGAR_PRODUCTO_ERROR
});