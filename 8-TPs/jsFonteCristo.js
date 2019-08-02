/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

  var num;

function NumerosPares(){

  num = Math.floor(parseInt(document.getElementById("numero").value));

  if(isNaN(num) || num <= 0){
    document.getElementById("numero").value = "";
  } else{
    if( num % 2 != 0){
      num -= 1;
    }

    var i = 0;

    for( ; num > 0 ; num -= 2, i++){
      document.write("<font size = 5>" + num + "; ");
    }

    document.write("<font size = 7> <br> La cantidad de números pares es de " + i);
  }

}

function NumerosImpares(){
  
  num = Math.floor(parseInt(document.getElementById("numero").value));

  if(isNaN(num) || num <= 0){
    document.getElementById("numero").value = "";
  } else{
    if( num % 2 == 0){
      num -= 1;
    }

    var i = 0;

    for( ; num > 0 ; num -= 2, i++){
      document.write("<font size = 5>" + num + "; ");
    }

    document.write("<font size = 7> <br> La cantidad de números impares es de " + i);
  }

}

function NumerosDivisibles(){

  num = Math.floor(parseInt(document.getElementById("numero").value));
    
  if( isNaN(num) || num <= 0 ){
    document.getElementById("numero").value = "";
  } else{
      var cantdiv = 0;

      for( i = 1 ; i <= 100 ; i++){
        if( num % i == 0 ){
          document.write("<font size = 6>" + i + "; ");
          cantdiv++
        }
      }

      document.write("<font size = 7> <br> <br> La cantidad de divisores de " + num + " que hay entre 1 y 100 es de " + cantdiv);
    }
    
}
