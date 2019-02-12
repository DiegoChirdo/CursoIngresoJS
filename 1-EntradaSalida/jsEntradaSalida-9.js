/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	
	var sueldo;
	var Aumento;
	var resultado;

	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);
	
	Aumento = parseInt(Aumento)
	Aumento = sueldo * 10 / 100;

	resultado = document.getElementById('resultado').value;
	resultado = parseInt(resultado);
	resultado = Aumento + sueldo;

	document.getElementById('resultado').value = resultado;



	//var misueldo;
	//var aumento;
	//var final;

	//misueldo = document.getElementByID('sueldo').value
	//misueldo=parseInt(misueldo);

	//aumento = parseInt(aumento);
	//aumento = misueldo * 10 /100;

	//final = document.getElementByID('resultado').value;
	//final = parseInt(resultado);
	//final = aumento + misueldo;

	//document.getElementByID('resultado').value = final;



}
