/* 9) Una empresa de turismo organiza una excursión a un lugar al que se irá en micro. El micro cobra $3.000 por sus servicios.
El precio base de la excursión es de $50 por persona, pero si se superan las 25 personas ese precio se reduce a $45 y si se superan las 35 a $40.
Esta empresa necesita un sistema que le permita calcular cuánto debe pagar en total cada turista para que al menos no pierda plata. */


var micro = 3000
var precioBase = 50
var precioTotal, cantPax

cantPax = parseInt(prompt('Cantidad de pasajeros: '))

if(cantPax <25){
  precioBase = cantPax*50
  precioTotal = (micro+precioBase)/cantPax
  alert('El precio por cada pasajero es de $'+precioTotal)
}
else if (cantPax >25 && cantPax <=35){  
  precioBase = cantPax*45
  precioTotal = (micro+precioBase)/cantPax
  alert('El precio por cada pasajero es de $'+precioTotal)
} 
else if(cantPax >35){
  precioBase = cantPax*40
  precioTotal = (micro+precioBase)/cantPax
  alert('El precio por cada pasajero es de $'+precioTotal)
         
        }
else{
  alert('Solo está permitido colocar una cantidad de pasajeros entre 1 y 50')
}
