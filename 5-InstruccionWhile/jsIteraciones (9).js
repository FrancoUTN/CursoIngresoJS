function mostrar()
{
  var num, max, min, primeravez = true;

	do{
    do{
      num = parseInt(prompt("Ingrese un número:"));
    } while(isNaN(num));
    if(primeravez){
      primeravez = false;
      max = num;
      min = num;
    }
     if(num > max){
      max = num;
    } else if(num < min){
      min = num;
    }
	} while(confirm("¿Quiere ingresar otro número?"));

  document.getElementById("maximo").value = max;
  document.getElementById("minimo").value = min;

}
