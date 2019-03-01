
function mostrar()
{

	var ancho; //creo las variables
	var largo;
	var perimetro;

	ancho=prompt("Ingrese el ancho"); //indico que el valor de las variables es igual a los datos ingresados por prompt
	largo=prompt("Ingrese el largo");

	ancho=parseInt(ancho); //transformo a entero los valores
	largo=parseInt(largo);

	perimetro=(2*ancho)+(2*largo);//defino el algoritmo para la variable perimetro

	alert("El perimetro es "+perimetro);//muestro resultado por alert


}
