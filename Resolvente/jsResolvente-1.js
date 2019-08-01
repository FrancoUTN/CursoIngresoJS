function mostrar()
{
	var a, b, c, x1, x2;

	do{
		a = parseInt(prompt("Ingrese el coeficiente 'a':" ));
	} while(isNaN(a));
	
	do{
	b = parseInt(prompt("Ingrese el coeficiente 'b':"));
	} while(isNaN(b));

	do{
	c = parseInt(prompt("Ingrese el coeficiente 'c':"));
	} while(isNaN(c));

	if( Math.pow(b,2) - 4 * a * c < 0 ){
		alert("No hay solución.");
	} else{
		x1 = ( - b + Math.sqrt(Math.pow(b,2) - 4 * a * c ) ) / ( 2 * a );
		x2 = ( - b - Math.sqrt(Math.pow(b,2) - 4 * a * c ) ) / ( 2 * a );

		document.write("<font size=6> <br/> Las raíces de la ecuación (" + a + "x^2) + (" + b + "x) + (" + c + ") = 0 son: <br/> <br/> x1 = " + x1 + " <br/> <br/> x2 = " + x2);
	}
}

