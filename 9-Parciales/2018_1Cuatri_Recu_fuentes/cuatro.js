function mostrar()

// Sistema que siempre recibe cuatro precios.
// 20 60 30 10    -   60
// Una vez ingresado los precios, tengo que avisale
// al cliente cual fue el importe mas alto ingresado.
//  2 5 9 3   -    9
// 10 15 20 15  -   20
//  10 10 10 10  -   10
// Cuando sumo los precios tengo que avisar cuanto
// es el importe
// Si el importe es igual o mayor a 100, se le hace 
// un descuento de 10% - Tengo que avisale con descuento
// Incluido.
// Mayores a 50 le hago un 5% de descuento.
// Si esta debajo de los 50, tiene que pagar un 15% mas.
// 

{

	var precio1;
	var precio2;
	var precio3;
	var precio4;
	var suma;
	var numalto;
	var final;
	var descuento;

	precio1 = prompt("Ingrese el primer precio");
	precio2 = prompt("Ingrese el segundo precio");
	precio3 = prompt("Ingrese el tercer precio");
	precio4 = prompt("Ingrese el cuarto precio");

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);
	precio4 = parseInt(precio4);

	if (precio1 >= precio2)
	{
		if (precio1 >= precio3)
		{  	
			if (precio1 >= precio4)
			{ 
			numalto=precio1;
			}
		}
	}

	else if (precio2 >= precio1)
	{
		if (precio2 >= precio3)
		{  	
			if (precio2 >= precio4)
			{ 
				numalto=precio2;
			}
		}
	}

	else if (precio3 >= precio1)
	{
		if (precio3 >= precio2)
		{  	
			if (precio3 >= precio4)
			{ 
				numalto=precio3;
			}
		}
	}

	else (precio4 >= precio1)
	{
		if (precio4 >= precio2)
		{  	
			if (precio4 >= precio3)
			{ 
				numalto=precio4;
			}
		}
	}

	alert("El número mas alto ingresado fue: "+numalto);


	suma = precio1+precio2+precio3+precio4;

	alert("Precio bruto es: "+suma);


	if (suma>=100)
	{
		final = suma - (suma * 10 / 100);
		descuento ="10% de descuento";
	}

	else if (suma>=50)
	{ 
		final = suma - (suma * 5 / 100);
		descuento = "5% de descuento";
	}

	else
	{
		final = suma + (suma * 15 / 100);
		descuento = "15% de agregado debido a que su compra no excede los $50";
	}

	alert("Precio final sería: "+final+" pesos, con un "+descuento);








//	var cuenta;
//	var amigos;
//	var iva;
//	var total;
//	var propina;
//	var resultado;
//	var pago;

//	cuenta = prompt("Ingrese la cuenta");
//	amigos = prompt("Ingrese la cantidad de amigos");

//	cuenta = parseInt(cuenta);
//	amigos = parseInt(amigos);

//	iva = cuenta * 21 / 100;
//	total = cuenta + iva;
//	propina = total * 10 / 100;
//	resultado = total + propina;
//	pago = (total + propina) / amigos;

//	alert("La cuenta es de $"+cuenta+", sumándose el IVA (%21), serían en total, $"+total+". En caso de contar una propina, al ser el %10, esta sería de $"+propina+". Lo que daría un resultado de $"+resultado+". Dado que ustedes son "+amigos+", deberían pagar "+pago+" cada uno.");

	
	
}