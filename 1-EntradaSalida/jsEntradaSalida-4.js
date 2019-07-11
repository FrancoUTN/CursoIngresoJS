/*
	Debemos lograr tomar un dato por 'PROMPT'
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
var dato;

dato = prompt("Ingrese un dato");

function mostrar()
{
  document.getElementById("elNombre").value = dato;

}

