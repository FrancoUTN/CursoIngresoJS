function mostrar()
{ /*
var sexo;

while(sexo != "f" & sexo != "m"){
  sexo = prompt("ingrese f ó m .");
}

if(sexo == "m"){
  document.getElementById('Sexo').value = "masculino";
} else {document.getElementById('Sexo').value= "femenino";
  }


var sexo;

do{
  sexo = prompt("ingrese f ó m .");
} while(sexo != "f" & sexo != "m");

if(sexo == "m"){
  document.getElementById('Sexo').value = "masculino";
} else {document.getElementById('Sexo').value= "femenino";
  }
  */

  var sexo;

  for(;sexo != "m" & sexo != "f";){
    sexo = prompt("Ingrese su sexo: ");
  }

  if(sexo == "f"){
    document.getElementById("Sexo").value = "Femenino.";
  } else{
      document.getElementById("Sexo").value = "Masculino";
    }

}
