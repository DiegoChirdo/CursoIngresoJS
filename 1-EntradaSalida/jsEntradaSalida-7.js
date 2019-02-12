/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeruno;
	var numerdos;
	var sumar;

	numeruno = numeroUno.value;
	numerdos = numeroDos.value;

	numeruno = parseInt(numeruno);
	numerdos = parseInt(numerdos);

	sumar = numeruno + numerdos;

	alert("La suma de ambos números es "+sumar);
}

function restar()
{
	var numeruno;
	var numerdos;
	var restar;

	numeruno = numeroUno.value;
	numerdos = numeroDos.value;

	numeruno = parseInt(numeruno);
	numerdos = parseInt(numerdos);

	restar = numeruno-numerdos;

	alert("La resta de ambos números es "+restar);

}

function multiplicar()
{ 
	var numeruno;
	var numerdos;
	var multiplicar;

	numeruno = numeroUno.value;
	numerdos = numeroDos.value;

	numeruno = parseInt(numeruno);
	numerdos = parseInt(numerdos);

	multiplicar = numeruno*numerdos;

	alert("La multiplicación entre ambos números da "+multiplicar);

}

function dividir()
{
	var numeruno;
	var numerdos;
	var dividir;

	numeruno = numeroUno.value;
	numerdos = numeroDos.value;

	numeruno = parseInt(numeruno);
	numerdos = parseInt(numerdos);

	dividir = numeruno/numerdos;

	alert("La división entre ambos números da "+dividir);
}

