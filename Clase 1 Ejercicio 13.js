/*
  13)El empleado de un negocio necesita calcular el precio final de prendas  con descuento.
 Al precio inicial se le debe aplicar el descuento que figura  en la prenda y luego el IVA para
 llegar al precio final.
 */

 var precioInicial, precioFinal, conDescuento, iva

 precioInicial = parseFloat(prompt('Ingrese precio inicial $'))
 descuento = parseFloat(prompt('Ingrese descuento $'))
 precioFinal = (precioInicial-descuento)*1.21;
 console.log('El precio final con descuento e IVA incluido es de $'+precioFinal)
