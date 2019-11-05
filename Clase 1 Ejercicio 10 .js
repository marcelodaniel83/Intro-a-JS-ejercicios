/* Un empresario necesita calcular el pago a un consultor, la información  con la que contará son las horas
 que trabajó y el precio que cobra por  hora.
 */

var horasTrabajo = 0;
var precioHora = 0;

horasTrabajo = parseInt(prompt('Ingrese cantidad de horas trabajadas: '));
precioHora = parseInt(prompt('Ingrese el precio por hora $'));

alert('El pago que corresponde al consultor es de $'+ horasTrabajo*precioHora  +'.-');
