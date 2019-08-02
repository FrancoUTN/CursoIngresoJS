function mostrar()
{
  var cantdiv = 0;

  do{
    var num = parseInt(prompt("Ingrese el número:"));
  }while(isNaN(num));

  for( i = 1 ; i <= num ; i++){
    if( num % i == 0){
      document.write("<font size = 6>" + i + ", ");
      cantdiv++
    }
  }

  document.write("<font size = 7> <br> <br> Hubo " + cantdiv + " divisores encontrados.");

}