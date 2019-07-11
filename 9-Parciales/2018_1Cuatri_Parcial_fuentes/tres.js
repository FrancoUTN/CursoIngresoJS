function mostrar()
{
  var precio, descuento;

  precio = parseInt(prompt("Ingrese el precio: "));
  descuento = parseInt(prompt("Ingrese el porcentaje de descuento: "));

  document.getElementById("elPrecioFinal").value = precio -= precio * descuento / 100;
}
