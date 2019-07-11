/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var sueldo, intsue;

  sueldo = document.getElementById("sueldo").value;
  intsue = parseInt(sueldo);
  document.getElementById("resultado").value = intsue * 1.1;

}
