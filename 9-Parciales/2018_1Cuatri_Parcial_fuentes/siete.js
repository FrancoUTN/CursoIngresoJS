function mostrar(){

    var nota, cont = 0, sexo, acunota = 0, minnota, varonesaprobados = 0, bandera = true, sexominnota;

    do{
        cont++;

        do{
            nota = parseInt(prompt("Ingrese la nota del alumno " + cont));
        } while(isNaN(nota) || nota < 0 || nota > 10);

        do{
            sexo = prompt("Ingrese su sexo ( 'f' para femenino, 'm' para masculino )");
        } while(sexo != "f" & sexo != "m");

        acunota += nota;

        if(bandera || nota < minnota){
            minnota = nota;
            sexominnota = sexo;
            bandera = false;
        }

        if(sexo == "m"){
            if(nota >= 6){
                varonesaprobados++;
            }
        }

    } while(cont < 5);

    alert("El promedio de las notas totales es de: " + (acunota / cont));
    if(sexominnota == "f"){
        alert("La nota más baja fue de " + minnota + ", de parte de una mujer.");
    } else{
        alert("La nota más baja fue de " + minnota + ", de parte de un varón.");
    }
    alert("La cantidad de varones que obtuvieron 6 o más de nota fue de: " + varonesaprobados);

}
