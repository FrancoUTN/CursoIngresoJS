function Ej1(){

  var a, b, ang1, ang2, ang3;

  do{
    ang1 = parseInt(prompt("Ingrese los grados del primer ángulo:"))
  } while(isNaN(ang1) || ang1 <= 0 || ang1 >= 180);

  do{
    ang2 = parseInt(prompt("Ingrese los grados del segundo ángulo:"))
  } while(isNaN(ang2) || ang2 <= 0 || ang2 >= (180 - ang1));

  ang3 = 180 - ang1 - ang2;

  if((ang1 != 90 && ang2 != 90 && ang3 != 90)){
    alert("NO es un triángulo rectángulo.");
    return;
  }

  do{
    a = parseInt(prompt("Ingrese la longitud de un cateto:"));
    } while(isNaN(a) || a <= 0);

  do{
  b = parseInt(prompt("Ingrese la longitud del otro cateto:"));
  } while(isNaN(b) || b <= 0);

  document.write("<font size = 7> La superficie de su triángulo rectángulo es de " + ( (a * b) / 2 ) );

}

function Ej2(){

  var cont = 0, nombre, edad, acuedad = 0, promedad,
   pg, pp, recordpos = 0, maxpg, maxpp, masvic, masderr, bandera = true;

    do{
      cont++;

      nombre = prompt("Ingrese el nombre del " + cont + "º tenista:");

      do{
      edad = parseInt(prompt("Ingrese su edad:"));
      } while(isNaN(edad) || edad <= 0);

      do{
        pg = parseInt(prompt("¿Cúantos partidos ganó?"));
      } while(isNaN(pg) || pg < 0);

      do{
        pp = parseInt(prompt("¿Cuántos perdió?"));
      } while(isNaN(pp) || pp < 0);

      acuedad += edad;

      if(pg > pp){
        recordpos++;
      }

      if(bandera || pg > maxpg){
        maxpg = pg;
        masvic = nombre;
      }

      if(bandera || pp > maxpp){
        maxpp = pp;
        masderr = nombre;
        bandera = false;
      } //Podría haber usado también if(cont == 1) como bandera

    } while(confirm("¿Desea cargar nuevo(s) tenista(s)?"));

    promedad = acuedad / cont;

    document.write("<font size = 7> El promedio de edad de los tenistas es de " + promedad);
    document.write("<br><br> Hay " + recordpos + " tenista(s) con récord positivo.");
    document.write("<br><br>" + masvic + " es el tenista con más victorias.");
    document.write("<br><br>" + masderr + ", el tenista con más derrotas.");

 }

 function Ej3(){

  var prod, pre, temp, acuprecio = 0, prodmascaro, maxpre, cont = 0,
   prodmasbarato, minpre, maxbajo0, mintempsobre0, promprecio,
    bandera1 = true, bandera2 = true;

  do{
    cont++

    do{
      prod = prompt("Ingrese el nombre del producto:");
      var auxprod = prod;
      parseInt(auxprod);
    } while(isNaN(auxprod) == false);

    do{
      pre = parseInt(prompt("Ingrese su precio:"));
    } while(isNaN(pre) || pre < 0);

    do{
      temp = parseInt(prompt("Ingrese su temperatura de conservación (rango: 10º a -10º):"));
    } while(isNaN(temp) || temp < -10 || temp > 10);

    acuprecio += pre;

    if(cont == 1){
      maxpre = pre;
      minpre = pre;
      prodmascaro = prod;
      prodmasbarato = prod;
    } else if (pre > maxpre){
      prodmascaro = prod;
      maxpre = pre;
    } else if(pre < minpre){
      prodmasbarato = prod;
      minpre = pre;
    }
    if(temp < 0 & (pre > maxbajo0 || bandera1)){
      maxbajo0 = pre;
      bandera1 = false;
    } else if(temp < mintempsobre0 || bandera2){
      mintempsobre0 = temp;
      bandera2 = false;
    }

  } while(confirm("¿Quiere ingresar otro producto?"));

  promprecio = acuprecio / cont;

  document.write("<font size = 7> El promedio de precios fue de $" + promprecio.toFixed(2));
  document.write("<br><br>" + prodmascaro + " es el producto más caro.");
  document.write("<br><br>" + prodmasbarato + ", el más barato.");
  if(bandera1){
    document.write("<br><br> No hay ningún producto que se conserve a temperatura bajo 0º.");
  } else{
  document.write("<br><br> El precio del producto más caro de los que se conservan a temperatura bajo 0º es de $" + maxbajo0);
  }
  if(bandera2){
    document.write("<br><br> No hay ningún producto cuya temperatura de conservación sea sobre 0º.");
  } else{
  document.write("<br><br> De las temperaturas de productos que se conservan por encima de 0º, " + mintempsobre0 + "º es la mínima.");
  }

}

  
  function Ej4(){

    var num, cont = 0, cantpares = 0, acupares = 0, ceros = 0, cantdiv3 = 0,
    acumenora300 = 0, cantmenora300 = 0,
    mayora500 = 1, 
    maxprimo, primerprimo = true, haymayora500 = false;

    do{
      var primo = true, cont2 = 1;

      cont++;

      do{
        num = parseInt(prompt("Ingrese el " + cont + "º número. Que esté entre -100 y 900"));
      } while(num <= -100 || num >= 900);

      if(num % 2 == 0 & num != 0){
        cantpares++;
        acupares += num;
      } else if(num === 0){
        ceros++;
      }

      if(num % 3 == 0){
        cantdiv3++;
      }

      if(num < 300){
        acumenora300 += num;
        cantmenora300++;
      }

      if(num > 500){
      mayora500 *= num;
      haymayora500 = true;
      }

      do{
        cont2++;
        if(num % cont2 == 0 & num != 2){
          primo = false;
          }
        } while(cont2 < (num / 2) & primo);

        if(primo){
          if(num > maxprimo || primerprimo){
            maxprimo = num;
            primerprimo = false;
          }
        }
        
        } while(cont < 10)

    document.write("<font size = 5> <br> 1) La cantidad de números pares es de: " + cantpares);
    document.write("<br> <br> 2) La cantidad de ceros es de: " + ceros);
    if(cantpares == 0){
      document.write("<br> <br> 4) No se han ingresado números pares.");
    } else{
    document.write("<br> <br> 3) El promedio de pares es de: " + (acupares / cantpares));
    }
    document.write("<br> <br> 4) Hay " + cantdiv3 + " números que son divisibles por 3.");
    if(cantmenora300 == 0){
      document.write("<br> <br> 5) No se ha ingresado ningún número menor a 300.");
    } else{
    document.write("<br> <br> 5) El promedio de los números menores a 300 es de: " + (acumenora300 / cantmenora300));
    }
    if(mayora500 > 500){
      document.write("<br> <br> 6) La multiplicación acumulada de los números mayores a 500 es de: " + mayora500);
      } else{
        document.write("<br> <br> 6) No se han ingresado ni 2 números mayores a 500.");
    }
    if(primerprimo == false){
    document.write("<br> <br> 7) El mayor número primo es: " + maxprimo);
    } else{
      document.write("<br> <br> 7) No se ha ingresado ningún número primo.");
    }

  }
