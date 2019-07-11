/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

var num1, num2, Int1, Int2, suma, resta, multi, divis;

function sumar()
{
  num1 = document.getElementById("numeroUno").value;
  num2 = document.getElementById("numeroDos").value;
  Int1 = parseInt(num1);
  Int2 = parseInt(num2);

  suma = Int1 + Int2;
  alert("La suma es igual a: " + suma);
}

function restar()
{
  num1 = document.getElementById("numeroUno").value;
  num2 = document.getElementById("numeroDos").value;
  Int1 = parseInt(num1);
  Int2 = parseInt(num2);

  resta = Int1 - Int2;
  alert("La resta es igual a: " + resta);
}

function multiplicar()
{
  num1 = document.getElementById("numeroUno").value;
  num2 = document.getElementById("numeroDos").value;
  Int1 = parseInt(num1);
  Int2 = parseInt(num2);

  multi = Int1 * Int2;
  alert("La multiplicación es igual a: " + multi);
}

function dividir()
{
  num1 = document.getElementById("numeroUno").value;
  num2 = document.getElementById("numeroDos").value;
  Int1 = parseInt(num1);
  Int2 = parseInt(num2);

  divis = Int1 / Int2;
  alert("La división es igual a: " + divis)
}

