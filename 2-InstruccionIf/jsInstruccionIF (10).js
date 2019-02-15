function mostrar()
{

	//Genero el número RANDOM entre 1 y 10 
	
	//CTRL + D = Modifica todas las variables de nombre similar
	
	var numeroRandom;
	var mensaje;

	numeroRandom = Math.floor((Math.random() * 10) + 1);


	if(numeroRandom>8)
		{
			mensaje="excelente"
		}
	else if (numeroRandom>3)	
		{
			mensaje="aprobó"
		}
	else
		{	
			mensaje="vamos, la próxima se puede"
		};
	
	console.log(numeroRandom);
	alert("La nota es "+numeroRandom+", "+mensaje);


}//FIN DE LA FUNCIÓN