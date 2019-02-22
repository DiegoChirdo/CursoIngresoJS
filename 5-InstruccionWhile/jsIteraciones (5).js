function mostrar()
{

	var sexo; 
	document.getElementById('Sexo').value=sexo;
	sexo = prompt("Ingrese su sexo (f o m)");

	while (sexo != "f" && sexo != "m")
	{
		sexo = prompt("Error, ingrese f o m");
	}
	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN