
function mostrar()
{
	var mascota1;
	var mascota2;
	var pesomascota1;
	var pesomascota2;
	var suma;

	mascota1=mascota1.value;
	mascota2=mascota2.value;

	pesomascota1=pesomascota1.value;
	pesomascota2=pesomascota2.value;

	pesomascota2=parseInt(pesomascota1);
	pesomascota1=parseInt(pesomascota2);

	suma = pesomascota1 + pesomascota2;


	alert("tenes dos mascotas "+mascota1+" y "+mascota2+", que pesan"+pesomascota1+" y "+pesomascota2+" kilos, la suma de los kilos es "+suma"");
}
