function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
  var num;
  var respuesta='si';

  do{
    do{
      num = parseInt(prompt("Ingrese un número: "));
      if(num >= 0){
        positivo += num;
      } else{
        negativo = negativo * num;
      }
    } while(isNaN(num));
    respuesta = prompt("Para continuar ingresando números, ingrese 'si':");
  } while(respuesta == 'si');


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}
