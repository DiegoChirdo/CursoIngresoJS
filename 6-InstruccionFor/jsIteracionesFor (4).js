function mostrar()
{

	var numeroRecorrido;
	var numeroAnterior;
	var numeroIngresado;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>1;numeroRecorrido--)
	{

		for(numeroAnterior=numeroRecorrido-1;numeroAnterior>1;numeroAnterior--)
		{
			if(numeroRecorrido%numeroAnterior==0)
			{
					break;		
			}


			console.log(numeroAnterior);

		}

		if(numeroAnterior==1)
			{
				console.log("es primo"+numeroRecorrido);			
			}


		
	}

	



}//FIN DE LA FUNCIÓN