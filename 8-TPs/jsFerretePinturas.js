/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   var fah, cent;
    
    fah = parseInt(document.getElementById("Temperatura").value);

    cent = (fah - 32) * 5/9;

    alert(fah + "º Fahrenheit equivalen a " + cent + "º centígrados");		
}

function CentigradosFahrenheit () 
{   var fah, cent;
    
    cent = parseInt(document.getElementById("Temperatura").value);

    fah = (cent * 9 / 5) + 32

    alert(cent + "º centígrados equivalen a " + fah + "º Fahrenheit");
}
