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
*/

var sexo;

do{
  sexo = prompt("ingrese f ó m .");
} while(sexo != "f" & sexo != "m");

if(sexo == "m"){
  document.getElementById('Sexo').value = "masculino";
} else {document.getElementById('Sexo').value= "femenino";
  }
}
