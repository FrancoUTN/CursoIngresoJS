function mostrar()
{
//tomo la edad

  var edad;

   edad = parseInt(document.getElementById("edad").value);

    if(edad < 18 & document.getElementById("estadoCivil").value != "Soltero"){
      alert("Usted es muy pequeño para NO ser soltero.")
    }


}//FIN DE LA FUNCIÓN
