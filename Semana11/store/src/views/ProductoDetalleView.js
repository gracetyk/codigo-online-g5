import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { obtenerProductoPorId } from "../services/productoService";

export default function ProductoDetalleView() {
    const [producto, setProducto] = useState(null);

    const { id } = useParams(); //un objeto con todos los parámetros de la URL

    const getProducto = async () => {
        try {
            const prodObtenido = await obtenerProductoPorId(id);
            setProducto(prodObtenido);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducto();
    }, []);

    return (
        <div className="container">
            {/* en muchos casos es necesario y recomendable validar si algo es undefined o null */}
            <div className="row my-3">
                {/* si producto no es null, undefined o algún valor falsy, muestro el producto*/}
                {producto ? (
                    <>
                        <div className="col-12 col-md-6">
                            <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h4>{producto.nombre}</h4>
                            <h3>S/ {producto.precio}</h3>
                            <hr />
                            <p>{producto.descripcion}</p>
                            <div className="d-flex">
                                <div>
                                    <button class="btn btn-dark">-</button>1<button class="btn btn-dark">+</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
}
