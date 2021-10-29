// se va encargar de hacer peticiones

const URL = "https://616b5ead16c3fa001717167c.mockapi.io/productos";

const obtenerProductos = async () => {
    try {
        //intenta esto
        //await , le deciamos aguanta, esto se tiene que resolver
        //respuesta del fetch, me da el status, 200, cabeceras del response, NO ME DA UN JSON
        const respuesta = await fetch(URL); //solamente la URL, es un GET, respuesta de la petición
        const productos = await respuesta.json(); //aquí hay otra promesa y esto me da el JSON convertido
        return productos; //resolve(productos)
    } catch (error) {
        //y si falla me pasas la voz
        throw error;
    }
};

//este es el export
export { obtenerProductos };
