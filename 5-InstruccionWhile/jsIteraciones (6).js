function mostrar()
{ /*

	var contador = 0;
  var acumulador = 0;
  var num = 0;

while(contador < 5){
    contador++;
    num = parseInt(prompt("Ingrese el " + (contador) + "º número:"));
    while(isNaN(num)){
    num = parseInt(prompt("Ingrese el " + (contador) + "º número:"));
    }
    acumulador += num;
}

document.getElementById('suma').value = "Suma acumulada: " + acumulador;
document.getElementById('promedio').value = "Promedio: " + acumulador / 5;
*/

var contador = 0;
var acumulador = 0;
var num = 0;

do{
  contador++;
  do{
  num = parseInt(prompt("Ingrese el " + (contador) + "º número:"));
  } while(isNaN(num));
  acumulador += num;
} while(contador < 5);

document.getElementById('suma').value = "Suma acumulada: " + acumulador;
document.getElementById('promedio').value = "Promedio: " + acumulador / 5;
}
