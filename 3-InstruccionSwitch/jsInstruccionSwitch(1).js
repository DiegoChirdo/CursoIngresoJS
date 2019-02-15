function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje; 

switch (mesDelAño) 
{
  case "Enero":
    mensaje = "Buen año";
    break;
  case "Marzo":
    mensaje = "A clases";
    break;
  case "Julio":
     mensaje = "Felices vacaciones";
    break;
  case "Diciembre":
  	mensaje= "Felices fiestas";
  	break;
 }

alert(mensaje);

}//FIN DE LA FUNCIÓN