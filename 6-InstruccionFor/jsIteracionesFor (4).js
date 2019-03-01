function mostrar()
{
	var NumeroIngresado;
	var NumeroAnterior;
	var NumeroRepetido;

	NumeroIngresado=prompt("Ingrese un número");
	NumeroIngresado=parseInt(NumeroIngresado);

	for(NumeroAnterior=NumeroIngresado-1;NumeroAnterior>1;NumeroAnterior--)
	{	for (NumeroRepetido;)

		if(NumeroIngresado%NumeroAnterior==0)
		{
			break;
		}
		console.log(NumeroAnterior);
	}

	if(NumeroAnterior==1)
	{
		console.log("Es primo");
	}
	else
	{
		console.log("No es primo");
	}



}//FIN DE LA FUNCIÓN