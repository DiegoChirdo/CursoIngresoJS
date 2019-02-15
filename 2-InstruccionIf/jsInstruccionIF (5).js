function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;
	edad = document.getElementById('edad').value;
	edad=parseInt(edad);


	if(edad <13 || edad>17)      
	{
		mensaje="La persona no es adolescente"

		;
	}
	alert(mensaje);
	


}//FIN DE LA FUNCIÓN