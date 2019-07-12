function mostrar()
{
var mesDelAño = document.getElementById('mes').value;

mesDelAño = mesDelAño.toLowerCase()

switch(mesDelAño){
  case "enero": // e nero
  case "Febrero":
  case "Marzo":
  case "Abril":
  case "Mayo":
  case "Junio":
  alert("Falta para el invierno");
  break;
  case "Julio":
  case "Agosto":
  alert("Abrigate que hace frío.");
  break;
  default:
  alert("Ya pasamos el frio, ahora calor!!!.");
}

}
