function mostrar()
{/* var cont = 0;
var clave = prompt("ingrese el número clave.");
while(clave != "utn750"){
  cont++;
  var clave = prompt("ingrese el número clave.");
  if(cont == 3){
    break;
  }
}
  var cont = 0;
  var error = false; // Bandera
  do{ if(cont == 3){
    error = true; // Bandera
    break;
      }
    cont++;
    var clave = prompt("ingrese el número clave.");
  } while(clave != "utn750");
  if(error){
    alert("Error."); // Bandera
  }
*/
    var clave;
    var error = false;

    for(var cont = 0; clave != "utn750" ; cont++){
        if(cont == 3){
            error = true;
            break;
        }
        clave = prompt("Ingrese la clave: ");
    }

    if(error){
        alert("Error: 3 intentos fallidos.");
    }

}