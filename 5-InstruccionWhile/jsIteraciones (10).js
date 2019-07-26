function mostrar(){
    /*    if(num / 2 == ){
      cantpar += 1;
    }*/
  var num, sumapos = 0, sumaneg = 0, cantpos = 0, cantneg = 0;
  var cant0 = 0, cantpar = 0;

  do{
    do{
    num = parseInt(prompt("Ingrese el número: "));
    } while(isNaN(num));

    if(num > 0){
      sumapos += num;
      cantpos += 1;
    } else if(num < 0){
      sumaneg += num;
      cantneg += 1;
    } else{
      cant0 += 1;
    }
    if(num % 2 == 0){
      cantpar += 1;
    }
  } while(confirm("¿Desea ingresar otro número?"));

  document.write("<br/> 1- La suma de los números negativos es igual a: " + sumaneg);
  document.write("<br/> <br/> 2- La suma de los números positivos es igual a: " + sumapos);
  document.write("<br/> <br/> 3- La cantidad de números positivos es de: " + cantpos);
  document.write("<br/> <br/> 4- La cantidad de números negativos es de: " + cantneg);
  document.write("<br/> <br/> 5- La cantidad de ceros es de: " + cant0);
  document.write("<br/> <br/> 6- La cantidad de números pares es de: " + cantpar);
  if(cantpos > 0){
    document.write("<br/> <br/> 7- El promedio de los números positivos es de: " + (sumapos / cantpos));
  } else{
    document.write("<br/> <br/> 8- El promedio de los números positivos es de: 0");
  }
  if(cantneg > 0){
  document.write("<br/> <br/> 7- El promedio de los números negativos es de: " + (sumaneg / cantneg));
  } else{
    document.write("<br/> <br/> 8- El promedio de los números negativos es de: 0");
  }
  document.write("<br/> <br/> 9- La diferencia entre los números positivos y los negativos es de: " + (sumapos - sumaneg));
}
