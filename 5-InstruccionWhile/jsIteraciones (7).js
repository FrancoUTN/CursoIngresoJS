function mostrar()
{

	var contador=0;
  var acumulador=0;
	// var respuesta='si';

  do{
    contador++;
    do{
      var num = parseInt(prompt("Ingrese el " + contador + "º número:"));
    } while(isNaN(num));
    acumulador += num;
  } while(confirm("Desea continuar?"));

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}
