function mostrar()
{
    var cont = 0, letra, num, auxLetra, ceros = 0, pares = 0, impares = 0, acuPos = 0, acuNeg = 0,
    max, min, letraMax, letraMin, pos = 0;

    do{
        cont++;

        do{
            letra = prompt("Ingrese la " + cont + "º letra:");
            auxLetra = parseInt(letra);
        } while(isNaN(auxLetra) == false);

        do{
            num = parseInt(prompt("Ingrese el " + cont + "º número entre -100 y 100:"));
        } while(isNaN(num) || num < -100 || num > 100);

        if(num == 0){
            ceros++;
        } else if(num % 2 == 0){
            pares++;
        } else{
            impares++;
        }

        if(num > 0){
            acuPos += num;
            pos++;
        } else if(num != 0){
            acuNeg += num;
        }

        if(cont == 1){
            max = num;
            min = num;
            letraMax = letra;
            letraMin = letra;
        } else if(num > max){
            max = num;
            letraMax = letra;
        } else if(num < min){
            min = num;
            letraMin = letra;
        }

    } while(confirm("¿Desea ingresar más datos?"));

    document.write("<font size = 5> <br> La cantidad de números pares es de: " + pares);
    document.write("<br> <br> La cantidad de números impares es de: " + impares);
    document.write("<br> <br> La cantidad de ceros es de "+ ceros);
    if(pos > 0){
    document.write("<br> <br> El promedio de todos los números positivos ingresados es de: " + (acuPos / pos));
    } else{
        document.write("<br> <br> No se han ingresado números positivos.");
    }
    document.write("<br> <br> La suma de todos los números negativos es de: " + acuNeg);
    document.write("<br> <br> El número y la letra del número máximo son: " + max + " y " + letraMax);
    document.write("<br> <br> El número y la letra del número mínimo son: " + min + " y " + letraMin);

}
