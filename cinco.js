function mostrar()
{ var pla;

    pla = prompt("Ingrese un planeta del sistema solar (en minúscula): ");

    switch(pla){
        case "tierra": alert("Acá vivimos.");
        break;
        case "mercurio":
        case "venus": alert("Acá hace más calor.");
        break;
        case "marte":
        case "júpiter":
        case "saturno":
        case "urano":
        case "neptuno": alert("Acá hace más frio.");
        break;
        default: alert("No existe tal planeta en el sistema solar.");
    } 

}
