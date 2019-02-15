function mostrar()
{
//tomo la edad  


	var edad;
	var mensaje;
	edad = document.getElementById('edad').value;
	edad=parseInt(edad);

if(edad>=18)
{
//alert("Es mayor de edad");
mensaje="Es mayor de edad";
}
else
{
//alert("Es menor de edad");
mensaje="Es menor de edad";
};

alert(mensaje);
}//FIN DE LA FUNCIÓN