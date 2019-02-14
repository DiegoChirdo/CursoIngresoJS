function mostrar()
{

	var compra;
	var descuento;
	var iva;
	

	compra = gasto.value;
	compra = parseInt(compra);

	descuento = compra * 10 / 100 + compra;
	iva = descuento - (descuento * 21 / 100); 


	alert("tu compra es de $"+compra", tenes un descuento del 10% queda en $"+descuento+", mas el iva es $"+iva+"");

}
