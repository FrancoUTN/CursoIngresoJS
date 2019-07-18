function mostrar()
{ /* var numero = prompt("ingrese un número entre 0 y 10.");

while(numero > 9 || numero < 0){
  numero = prompt("ingrese un número entre 0 y 10.");
  while(isNaN(numero)){
    numero = prompt("ingrese un número entre 0 y 10.");
  }
}

  document.getElementById("Numero").value = numero;
*/

var numero;

do{
  numero = prompt("ingrese un número entre 0 y 10.");
  while(isNaN(numero)){
    numero = prompt("ingrese un número entre 0 y 10.");
  }
} while(numero > 9 || numero < 0);

  document.getElementById("Numero").value = numero;
}
