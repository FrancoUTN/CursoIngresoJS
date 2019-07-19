function mostrar(){

	var num = NaN;

	for(;isNaN(num);){
		num = -1;
		for(; num < 0 || num > 9;){
			num = prompt("Ingrese un número entre 0 y 9 inclusive: ");
		}
	}

	document.getElementById("Numero").value = num;

}