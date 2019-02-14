
function mostrar()
{
	var mascota1;
	var mascota2;
	var pesomascota1;
	var pesomascota2;
	var suma;

	mascota1= prompt("Porfavor, ingrese el nombre de su primera mascota");
	mascota2= prompt("Porfavor, ingrese el nombre de su segunda mascota");

	pesomascota1=prompt("Porfavor, ingrese cuánto pesa su primera mascota");
	pesomascota2=prompt("Porfavor, ingrese cuánto pesa su segunda mascota");

	pesomascota1=parseInt(pesomascota1);
	pesomascota2=parseInt(pesomascota2);

	suma = pesomascota1 + pesomascota2;


	alert("tenes dos mascotas "+mascota1+" y "+mascota2+", que pesan "+pesomascota1+" y "+pesomascota2+" kilos, la suma de los kilos es "+suma);
}
