function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad>=18)
	{
		mensaje="Usted es mayor de edad";
	}
	else if (edad<=13)
	{
		mensaje="Usted es un un niño";

	}
	else
	{	mensaje="Usted es adolescente";

	}

	
	alert(mensaje);

}//FIN DE LA FUNCIÓN