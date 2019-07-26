var num1, num2, suma;

num1 = parseInt(prompt("Ingrese el primer número: "));
num2 = parseInt(prompt("Ahora, ingrese el SEGUNDO número: "));

function mostrar()
{
    if(num1 == num2){
        alert(num1.toString() + num2.toString());
    } else if(num1 > num2){
        alert(num1 - num2);
    } else{
        suma = num1 + num2;
        if(suma > 10){
            alert("La suma es " + suma + " y superó el 10.");
        } else{
        alert(suma);
        }
    }
    
}
