function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch (mesDelAño) 
{
	case "Febrero":
	mensaje = "Este mes no tiene mas de 29 días";
	break;
	default:
	mensaje = "Este mes tiene mas de 30 días";
	break;
}

alert(mensaje);

	


}//FIN DE LA FUNCIÓN