/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100

	numeroSecreto = Math.floor((Math.random() * 100) + 1);
		
//		alert(numeroSecreto);

	contadorIntentos=0;

}

function verificar()
{
	var numeroingresado;
	contadorIntentos =contadorIntentos+1;
	intentos.value=contadorIntentos;
	numeroingresado = document.getElementById('numero').value;
	
//	alert(numeroingresado);

	if (numeroingresado == numeroSecreto)
	{
	switch (contadorIntentos)
	{
	case numeroSecreto:
	mensaje = "En el primer intento";
	break;
	case contadorIntentos=2:
	mensaje ="Casi a la primera";
	break;
	case contadorIntentos=3:
	mensaje = "Ganaste al tercer intento";
	break;
	default:
	mensaje = "Despues del cuarto intento ya no cuenta";
	break;
	}

		alert(mensaje);
	}	

	//else if (numeroingresado < numeroSecreto)
	//{
	//	alert("Falta");
	//}
	//else
	//{
	//	alert("Te pasaste");
	//}
	
	else 
	{
	if (numeroingresado < numeroSecreto)
	{
		alert("Falta");
	}
	else
	{
		alert("Te pasaste");
	}
	}
	console.log(numeroSecreto);
	
}