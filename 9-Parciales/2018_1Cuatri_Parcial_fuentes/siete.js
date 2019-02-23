function mostrar()
{
//Bienvenidos. 
//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
//a) El promedio de las notas totales. 
//b) La nota más baja y el sexo de esa persona. 
//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
	var contador=0;
	var acumulador=0;
	var sexo;
	var nota;
	var promedio;
	var baja;
	var cantidadvarones;
	nota = parseInt(nota);

	while (contador<5)
	{
		sexo = prompt("Ingrese sexo (F o M)");
		nota = prompt ("Ingrese notas");
		
		if (sexo!="F" || sexo!="M")
		{
			prompt("Error, ingrese nuevamente el sexo");
		}	
		else if (nota>10 || nota<0) 
		{
			prompt("Error, ingrese nuevamente la nota");
		}


	}

	alert("Promedio es "+promedio);
	


}