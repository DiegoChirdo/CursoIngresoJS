function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;
	edad = document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad<=17 && edad>=13)
	{
		mensaje="Es adolescente";

	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN