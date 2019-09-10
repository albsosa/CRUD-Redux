import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR,
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

// Obtener Listado de Productos (Consultar API)
export function obtenerProductosAction() {
    return (dispatch) => {
        dispatch( obtenerProductosComienzo() );

        // Consultar la API
        clienteAxios.get('/libros')
            .then(respuesta => {
                // console.log(respuesta);
                dispatch( descargaProductosExitosa(respuesta.data));
            })
            .catch(error => {
                console.log(error);
                dispatch( descargaProductosError() );
            })
    }
}

export const obtenerProductosComienzo = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS
})

export const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITOSA,
    payload: productos
})

export const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR
}) 