function mostrar()
{
	var velocidad;
	var combustible;
	var promedio;
	var contador;
	var velocidadBaja;
	var velocidadAlta;
	var contadorcombustible;
	var acumulador;
	var contadorvelocidad;
	velocidad=parseInt(velocidad);
	contador=0;
	contadorvelocidad=0;
	contadorcombustible=0;
	acumulador=0;

	while (contador<5)
	{
		contador=contador+1;
		while (velocidad>0 || velocidad<250)
		{
			velocidad=prompt("Ingrese velocidad");
			velocidad=parseInt(velocidad);
		}
		while (combustible!="L" && combustible!="S")
		{
			combustible=prompt("Ingrese combustible");
		}
	}

}


