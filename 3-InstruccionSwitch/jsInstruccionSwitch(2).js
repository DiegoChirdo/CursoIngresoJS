function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) 
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	mensaje = "Falta para el invierno";
	break;
	case "Julio":
	case "Agosto":
	mensaje = "Es invierno";
	break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	mensaje = "Llego el calor";
	break;
}

alert(mensaje);
 

 // NO, NO TIENE QUE HABER LOGICA
 // case ("Enero" || "Febrero" || "Marzo" || "Abril" || "Mayo" || "Junio"):
  //  mensaje = "Falta para el invierno";
   // break;
  //case ("Julio" || "Agosto"):
  //  mensaje = "Abrigate pa";
  //  break;
 // case ("Septiembre" || "Octubre" || "Noviembre" || "Diciembre"):
  //  mensaje = "Hace calor ahora";
   // break;
// MAL

}//FIN DE LA FUNCIÓN