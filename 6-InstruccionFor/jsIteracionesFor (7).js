function mostrar()
{
  do{
    var num = parseInt(prompt("Ingrese el número:")), j = 0;
  }while(isNaN(num));

  for( i = 1 ; i < num ; i++){
    if( num % i == 0){
      document.write(i + ", ");
      j++
    }
  }

  document.write("<br> <br> " + j);

} // Le faltan arreglos
