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
{
	var lamparas;
	var descuento;
	var precio;
	var preciobruto;
	var marca;
	var ingresobruto;
	var precioLamparas;
	var preciofinal; 

	lamparas = document.getElementById('Cantidad').value;
	lamparas = parseInt(lamparas);
	precio = 35;
	precio = parseInt(precio);
	precioLamparas = lamparas * precio;
	ingresobruto = preciobruto * 10 / 100;
	preciofinal = preciobruto + ingresobruto;



if (lamparas >= 6)
{
	descuento = precioLamparas * 50 / 100;
}

else if (lamparas == 5)
{

if (document.getElementById("Marca").value == "ArgentinaLuz")
{
	descuento = precioLamparas * 40 / 100;

}
else 
{
	descuento = precioLamparas * 30 / 100;
}

}

else if (lamparas == 4)
{
	if (document.getElementById("Marca").value == "ArgentinaLuz" || document.getElementById("Marca").value == "FelipeLamparas")	
{
	descuento = precioLamparas * 25 / 100;
}

	else
{
	descuento = precioLamparas * 20 / 100;

}

}
else (lamparas == 3)
{
	if (document.getElementById("Marca").value == "ArgentinaLuz")
{
	descuento = precioLamparas * 15 / 100;

}
	else if (document.getElementById("Marca").value == "FelipeLamparas")
{
	descuento = precioLamparas * 10 / 100;
}
	else
{
	descuento = precioLamparas * 5 / 100;
}
}
if (lamparas <= 2)
{
	descuento = 0;
}



	preciobruto = precioLamparas - descuento;
	document.getElementById("precioDescuento").value = preciobruto;

}
