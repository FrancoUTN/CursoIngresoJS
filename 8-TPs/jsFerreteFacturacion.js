/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ var pre1, pre2, pre3, suma;

    pre1 = parseInt(document.getElementById("PrecioUno").value);
    pre2 = parseInt(document.getElementById("PrecioDos").value);
    pre3 = parseInt(document.getElementById("PrecioTres").value);
    
    suma = pre1 + pre2 + pre3;
    alert("La suma de los precios de los tres productos es de: $" + suma);
}

function Promedio () 
{ var pre1, pre2, pre3, suma, prom;

    pre1 = parseInt(document.getElementById("PrecioUno").value);
    pre2 = parseInt(document.getElementById("PrecioDos").value);
    pre3 = parseInt(document.getElementById("PrecioTres").value);
    
    suma = pre1 + pre2 + pre3;

    prom = (suma / 3);

    alert("El promedio de los precios de los tres productos es de: $" + prom);
}
function PrecioFinal () 
{ var pre1, pre2, pre3, suma, prefinal;

    pre1 = parseInt(document.getElementById("PrecioUno").value);
    pre2 = parseInt(document.getElementById("PrecioDos").value);
    pre3 = parseInt(document.getElementById("PrecioTres").value);
    
    suma = pre1 + pre2 + pre3;

    prefinal = suma + (suma * 21 / 100);

    alert("El precio final es de: $" + prefinal.toFixed(2));
}