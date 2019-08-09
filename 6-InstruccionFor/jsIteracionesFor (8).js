function mostrar()
{
  var mje = "El número ingresado ES primo";

  do{
  var num = parseInt(prompt("Ingrese un número:"));
  }while(isNaN(num));

  for( i = 1 ; i < num / 2 ;){
    i++;
    if( num % i == 0){
      mje = "El número ingresado NO es primo";
      break;
    }
  }

  alert(mje);

}
