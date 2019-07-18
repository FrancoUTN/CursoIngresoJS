function mostrar()
{

	var contador=0;
  var acumulador=0;
	// var respuesta='si';

  do{
    contador++;
    var num = parseInt(prompt("Ingrese el " + contador + "º número:"));
    do{
      acumulador += num;
    } while(isNaN(num));
  } while(num != null);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}
