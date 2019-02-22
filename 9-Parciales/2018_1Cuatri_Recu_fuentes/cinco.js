



// 2- en cinco.js solo switch
// cada habitacion de un hotel tiene un precio, hay promociones según tipo de pago, 
// si es con tarjeta visa un 10%, si es por paypal un 15%, por mercadopago un 10%,
// efectivo un 20%, cualquier otro metodo un 5%
// si compraste el paquete "todoincluido" y pagas con paypal se te suma un 10%
// al descuento.
// si pagas en efectivo, tenes varias opciones, el paquete "solodesayuos", le suma un 10%
// al descuento, si el paquete es de "todoincluido" le suma un 15% y poara el resto de los
// paquetes no tiene descuento adicional 



function mostrar()
{

	var precio;
	var descuento;
	var descuento2;
	var modopago;
	var paquete;
	var paquete;

	precio=prompt("Precio de la habitación");
	precio=parseInt(precio);
	modopago=prompt("¿Cómo paga? (Efectivo, Visa, Paypal, Mercadopago, Otro");
	paquete=prompt("¿Qué paquete quiere? (TodoIncluido, SoloDesayunos)");

	switch (modopago) 
	{
		case "Visa":
		descuento = (precio * 10 / 100);
		break;
		case "PayPal":
		descuento = (precio * 15 / 100);
		break;
		case "MercadoPago":
		descuento = (precio * 10 / 100);
		break;
		case "Efectivo":
		descuento = (precio * 20 / 100);
		break;
		default:
		descuento = (precio * 5 / 100);
		break;
	}	

	switch (paquete) && modopago = "PayPal"
	{
		case "TodoIncluido":
		descuento2 = (precio * 10 / 100);


	}
}
