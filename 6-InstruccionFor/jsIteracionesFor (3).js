function mostrar()
{

	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número");
	var acumulador;
	numeroIngresado = parseInt(numeroIngresado);


	for(numeroAnterior=numeroIngresado-1;numeroAnterior>0;numeroAnterior--)
	{
		if(numeroIngresado % numeroAnterior == 0)
		{
			console.log(numeroAnterior);
			acumulador=acumulador+numeroAnterior;
		}
	}
	if (numeroIngresado==acumulador)
	{
		console.log("Numero Perfecto");
	}
	else
	{
		console.log("No es Numero Perfecto");
	}

}


//FIN DE LA FUNCIÓN
