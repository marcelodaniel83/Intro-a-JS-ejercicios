/*12)El empleado de un estacionamiento necesita calcular el pago de un  conductor
 que utiliza un estacionamiento solamente por unas horas. El 
estacionamiento cobra por hora y cualquier fracción de hora se cuenta  como una más.*/

var hora, tarifa, total;

hora = parseInt(prompt('Ingresar cantidad de horas: '))
tarifa = parseFloat(prompt('Ingresar tarifa por hora $'))
console.log('Precio a pagar $'+(tarifa*hora))
