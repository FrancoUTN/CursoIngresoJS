function mostrar()
{
//tomo la edad

  var edad, estciv;

  edad = parseInt(document.getElementById("edad").value);

  estciv = document.getElementById("estadoCivil").value;

  if(edad >= 18 & estciv == "Soltero"){
    alert("Es soltero y no es menor.")
  }


}//FIN DE LA FUNCIÓN
