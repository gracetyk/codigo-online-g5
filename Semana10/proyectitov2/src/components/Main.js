import Producto from "./Producto";

//<Main lista={listaPlatillos} />
//llamo a la f Main
//Main({lista})
export default function Main({ lista }) {
    return (
        <main>
            {lista.map((item, i) => (
                <Producto key={i} />
            ))}
        </main>
    );
}
