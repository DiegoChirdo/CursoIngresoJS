/* Cargar una serie de celulares pidiendo MARCA - TAMAÑO (Numero) - PRECIO - */
/* 1) Necesito saber el mayor precio (y su respectiva marca)

   LG - 3 3000
   SAMSUNG - 5 5000
   iPhone 4 8000
   SAMSUNG 4 1000
   LG 5 1000

   2) Promedio precio
   3) Cantidad de celus que valen >2000
   4) Celular, marca y tamaño del mas caro
   5) Celular, marca y tamaño del mas barato
   6) El primer celular que salga $8000
   7) Precio del último celular LG 	

*/

function mostrar()
{
	var celular;
	var marca;
	var tamaño;
	var precio;
	var respuesta; 
	var contador;
	var mayorPrecio;
	var marcaMayorPrecio;
	contador=0;

	while(respuesta=="Si")
	{
		marca=prompt("Ingrese celular");
		tamaño=prompt("Ingrese tamaño");
		precio=prompt("Ingrese precio");
		tamaño=parseInt(tamaño);
		precio=parseInt(precio);

		if(contador==0)
		{
			mayorPrecio=precio;
			marcaMayorPrecio=marca;
		}
		else
		{
			if(precio>mayorPrecio)
			{
				mayorPrecio=precio;
				marcaMayorPrecio=marca;
			}
		}

		contador=contador+1;
		respuesta=prompt("Ingresar otro dato?");
	}

	alert("El mayor precio es "+mayorPrecio+" y su marca es "+marcaMayorPrecio);

}