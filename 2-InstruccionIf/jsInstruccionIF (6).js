function mostrar()
{
//tomo la edad

  var edad;

  edad = parseInt(document.getElementById("edad").value)

  if(edad >= 18){
    alert("Usted es mayor de edad.")
    }   else if(edad >= 13){
     alert("Usted es adolescente.")
    }     else{
       alert("Usted es un/a niñ@")
     }
  }
