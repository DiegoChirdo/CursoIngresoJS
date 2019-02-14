function mostrar()
{
	var cuenta;
	var amigos;
	var iva;
	var total;
	var propina;
	var resultado;
	var pago;

	cuenta = cuentatotal.value;
	amigos = cantidaddeamigos.value;

	cuenta = parseInt(cuenta);
	amigos = parseInt(amigos);

	iva = cuenta * 21 / 100;
	total = cuenta + iva;
	propina = total * 10 / 100;
	resultado = total + propina;
	pago = (total + propina) / amigos;

	alert("La cuenta es de $"+cuenta+", sumándose el IVA (%21), serían en total, $"+total+". En caso de contar una propina, al ser el %10, esta sería de $"+propina+". Lo que daría un resultado de $"+resultado+". Dado que ustedes son "+amigos+", deberían pagar "+pago+" cada uno.)";
		
	
	




}
