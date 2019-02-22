function mostrar()


// While = Bucle
// 1) Inicializar al uno. La variable tiene que tener un valor. (var contador;)
// Darle valor al contador (contador = 0)
// 2) ESTABLECER CONDICIÓN =  while(contador < 999) (si tiene que ser menor a 999) (si pide 10, irían 10)
// 3) Modificar el while (Sino el bucle es infinito)
// (Concepto del contador es una variable que se suma así misma, mas un literal)

{
	var contador;
	contador = 0;


	while(contador<10)	
	{
	
		contador = contador + 1;
		console.log(contador);

	}

	alert('iteración while');


}//FIN DE LA FUNCIÓN