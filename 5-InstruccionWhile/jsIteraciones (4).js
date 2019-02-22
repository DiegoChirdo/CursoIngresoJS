function mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");

 // while (!(numero > 0 && numero < 10))

	while (numero < 0 || numero > 10)
	{
		numero = prompt("ingrese un número de 0 a 10");
	}
	alert("¡Correcto!");

}//FIN DE LA FUNCIÓN