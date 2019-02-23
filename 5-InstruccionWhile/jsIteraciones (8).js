function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var acumulador;
	var respuesta;

	contador=0;
	positivo=0;
	negativo=1;
	respuesta = "si";


while (respuesta=="si")
	{
		contador = contador+1;
		numero=prompt("Ingrese el número " + contador + "# : ");
		numero=parseInt(numero);
		
		if (numero>0)
		{
			positivo=positivo+numero;
		}
		else
		{
			negativo=negativo*numero;
		}
		
		acumulador = acumulador+numero;		
	
		respuesta = prompt("=> Si para continuar");
	}






//	var contador=0;
//	var positivo=0;
//	var negativo=1;
//	var acumulador;
//
//	var respuesta="si";
//
//	while (1)
//	{
//		contador = contador+1;
//		numero=prompt("Ingrese el número " + contador + "# : ");
//		numero=parseInt(numero);
//		//acumulador = acumulador+numero;		
//	
//		respueta = prompt("=> Si para continuar");
//		if (respuesta!="si")
//		{
//			break;
//		}
//	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

} //FIN DE LA FUNCIÓN