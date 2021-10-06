//Para esta parte usar if y for
//los resultados de preferencia en el discord pero finalizando el tiempo

/**
 * Ej1, crear una función que reciba un arreglo y un nombre
 * Si el nombre existe dentro de la función retornar la posición
 * del nombre encontrado, en caso de no encontrarlo retornar -1
 *
 * Tiempo aprox unos 5 minutos
 */

/**
 * Como sabe la sunat si un RUC es válido?????
 * Hay un dígito verificador
 *
 */

//Ejercicio RUC - Módulo 11
//https://es.wikipedia.org/wiki/C%C3%B3digo_de_control

function verificarRUC(ruc) {
    //verifiquemos que el ruc tenga 11 dígitos
    if (ruc.length == 11) {
        //es correcto
        //porque eventualmente en este bloque de codigo retornare un true
        let factorChequeo = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        let total = 0;
        for (let i = 0; i < factorChequeo.length; i++) {
            let prod = ruc[i] * factorChequeo[i];
            // total = total + prod
            total += prod;
        }
        console.log("total", total);
        let modulo = total % 11;
        console.log("modulo", modulo);
        let verificador = 11 - modulo;
        console.log(verificador);
        if (verificador == ruc[10]) {
            return true;
        }
    }
    return false;
}

// console.log(verificarRUC("10710093585"));

// let pagoHora = +prompt("cuanto es el pago por hora?");

// let totalHoras = 0;

// for (let i = 1; i <= 6; i++) {
//     let cantDiaria = +prompt("cuantas horas fueron hoy?");
//     totalHoras += cantDiaria;
// }

// console.log(`El trabajador tiene ${totalHoras} horas trabajadas con un pago de S/ ${totalHoras * pagoHora}`);

//

let productos = [
    {
        nombre: "Audifonos",
        clave: 1,
        materiaPrima: 20,
    },
    {
        nombre: "Funda para movil",
        clave: 2,
        materiaPrima: 10,
    },
    {
        nombre: "USB",
        clave: 3,
        materiaPrima: 15,
    },
    {
        nombre: "Mouse Gamer",
        clave: 6,
        materiaPrima: 30,
    },
    {
        nombre: "Teclado",
        clave: 4,
        materiaPrima: 120,
    },
    {
        nombre: "Gráfica",
        clave: 5,
        materiaPrima: 200,
    },
];

function calcularManoDeObra(clave, costoMP) {
    console.log("ejecutando mano de obra");
    if (clave == 3 || clave == 4) {
        return costoMP * 0.75;
    } else if (clave == 1 || clave == 5) {
        return costoMP * 0.8;
    } else if (clave == 2 || clave == 6) {
        return costoMP * 0.85;
    }
}

function calcularCostoFabricacion(clave, costoMP) {
    console.log("ejecutando costo fabricacion");
    if (clave == 2 || clave == 5) {
        return costoMP * 0.3;
    } else if (clave == 3 || clave == 6) {
        return costoMP * 0.35;
    } else if (clave == 1 || clave == 4) {
        return costoMP * 0.28;
    }
}

function calcularCostos(arrProductos) {
    let cProduccion = 0;
    for (let i = 0; i < arrProductos.length; i++) {
        //enfoquemonos en la mano de obra
        let costoMP = arrProductos[i].materiaPrima;
        console.log("MP", costoMP);
        let clave = arrProductos[i].clave;
        let costoMO = calcularManoDeObra(clave, costoMP);
        let costoCF = calcularCostoFabricacion(clave, costoMP);

        cProduccion += costoMP + costoMO + costoCF;
        // console.log(`El costo total de ${arrProductos[i].nombre} es S/ ${cProduccion}`);
    }
    return cProduccion;
}

// console.log(calcularCostos(productos));

let ventas = [
    {
        nombre: "televisor",
        precio: 1200,
    },
    {
        nombre: "radio",
        precio: 400,
    },
    {
        nombre: "smartphone",
        precio: 1500,
    },
    {
        nombre: "gráfica",
        precio: 1800,
    },
    {
        nombre: "exprimidor",
        precio: 100,
    },
    {
        nombre: "tablet",
        precio: 550,
    },
    {
        nombre: "monitor",
        precio: 600,
    },
];

function calcularReporte(arrVentas) {
    //T1, de 1000 a +
    //T2, de 500 a 1000
    //T3, de 500 a -
    //x cada una necesito saber el total
    //y aparte la suma de los totales
    let T1 = 0;
    let T2 = 0;
    let T3 = 0;
    for (let i = 0; i < arrVentas.length; i++) {
        if (arrVentas[i].precio > 1000) {
            T1 += arrVentas[i].precio;
        } else if (arrVentas[i].precio > 500) {
            T2 += arrVentas[i].precio;
        } else {
            //Acá por descarte, cuesta menos de 500
            T3 += arrVentas[i].precio;
        }
    }

    let reporte = {
        mayorAMil: T1,
        mayorAQuinientos: T2,
        menorAQuinientos: T3,
        totalGlobal: T1 + T2 + T3,
    };
    return reporte;
}

console.table(calcularReporte(ventas));

let datos = calcularReporte(ventas);

let cuerpo = document.querySelector("body");

let p = document.createElement("p");

p.innerHTML = `El monto global es ${datos.totalGlobal}`;

cuerpo.appendChild(p);
