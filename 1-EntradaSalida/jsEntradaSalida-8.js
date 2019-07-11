/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  var divid, divis, resto;
  divid = document.getElementById("numeroDividendo").value;
  divis = document.getElementById("numeroDivisor").value;
  resto = parseInt(divid) % parseInt(divis);
  alert(resto);

}
