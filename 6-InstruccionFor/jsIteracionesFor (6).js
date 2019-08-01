function mostrar()
{
  var num = parseInt(prompt("Ingrese un número:")), bandera = true;

  for(i=2, j = 0 ; i <= num ; i += 2, j++){
    if(bandera){
      document.write("<font size = 6> Números pares del 1 al " + num + ": <font size = 5>" + i);
      bandera = false
    } else
    document.write(", " + i);
  }

  document.write("<br> <br> <font size = 7> La cantidad de números pares encontrados es de: " + j);

}
