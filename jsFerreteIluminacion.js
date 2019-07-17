/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{ var cant, precio, marca, predesc;

    cant = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    precio = 35 * cant;

    if(cant >= 6){
        predesc = precio / 2;
    } 
     else if(cant == 5){
        if (marca == "ArgentinaLuz"){
        predesc = precio - (precio * 40 / 100);
        } else{
        predesc = precio - (precio * 30 / 100);
        }
    }
            else if(cant == 4){
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                    predesc = precio - (precio / 4);
                } else{
                    predesc = precio - (precio / 5);
                }
            }
                else if(cant == 3){
                    if(marca == "ArgentinaLuz"){
                        predesc = precio - (precio * 15 /100);
                    } else if(marca == "FelipeLamparas"){
                        predesc = precio - (precio / 10);
                    } else{
                        predesc = precio - (precio / 20);
                    }
                }

    if(predesc == undefined){
        document.getElementById("precioDescuento").value = "$ " + precio + " (No ha habido ningún descuento).";
    }                 
        else{
            if(predesc > 120){
                var X = predesc / 10;
                predesc += X;
                alert("IIBB. Usted pagó $" + X);
            }
            document.getElementById("precioDescuento").value = "$ " + predesc;
            }   	

}
