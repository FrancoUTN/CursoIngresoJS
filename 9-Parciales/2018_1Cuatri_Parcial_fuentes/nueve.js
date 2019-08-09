function mostrar(){

    var cont = 0, marca, peso, temp, tempPares = 0, maxPeso, marcaMaxPeso, tempBajo0 = 0, acuPeso = 0, minPeso;

        do{
            cont++;

            marca = prompt("Ingrese la marca del producto:");

            do{
                peso = parseInt(prompt("Ingrese su peso:"));
            } while(isNaN(peso) || peso < 1 || peso > 100);

            do{
                temp = parseInt(prompt("Ingrese su temperatura de almacenamiento: "));
            } while(isNaN(temp) || temp < -30 || temp > 30);
            
            if(temp % 2 == 0 & temp != 0){
                tempPares++;
            }

            if(cont == 1 || peso > maxPeso){
                maxPeso = peso;
                marcaMaxPeso = marca;
            }

            if(temp < 0){
                tempBajo0++;
            }

            acuPeso += peso;

            if(cont == 1 || peso < minPeso){
                minPeso = peso;
            }

        } while(confirm("¿Desea continuar ingresando datos?"));

        document.write("<font size = 6> <br> a) La cantidad de temperaturas pares es de: " + tempPares);
        document.write("<br> <br> b) La marca del producto más pesado es: " + marcaMaxPeso);
        document.write("<br> <br> c) Hay " + tempBajo0 + " producto(s) que se conserva(n) a menos de 0º.");
        document.write("<br> <br> d) El promedio del peso de todos los productos es de: " + (acuPeso / cont));
        document.write("<br> <br> f) El peso máximo es " + maxPeso + ", y el mínimo, " + minPeso);

}
