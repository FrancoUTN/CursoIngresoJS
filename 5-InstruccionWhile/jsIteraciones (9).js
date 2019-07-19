function mostrar()
{
  var num, max = -9999999, min = 9999999;

	do{
    do{
      num = parseInt(prompt("Ingrese un número:"));
    } while(isNaN(num));
     if(num > max){
      max = num;
    } else if(num < min){
      min = num;
    }
	} while(confirm("¿Quiere ingresar otro número?"));

  document.getElementById("maximo").value = max;
  document.getElementById("minimo").value = min;

}
