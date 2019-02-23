function mostrar()
{

	// declarar variables
	var contador;
	var numero;
	var maximo;
	var minimo;
	var respuesta;
	contador = 0;
	
	respuesta = "si";
	var bandera;
	bandera="es la primera";


	while(respuesta=="si")
	{
		contador = (contador + 1);
		numero=prompt("Ingrese el número " + contador + "# : ");
		numero=parseInt(numero);

		if(bandera=="es la primera")
		{
			maximo= numero;
			minimo=numero;
			bandera="lalala";
		}else
		{
			if (numero>maximo)
			{
				maximo = numero;
			}
			if (numero<minimo)
			{
				minimo = numero;
			}

		}
	

		respuesta = prompt("=> Si para continuar");
	
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN