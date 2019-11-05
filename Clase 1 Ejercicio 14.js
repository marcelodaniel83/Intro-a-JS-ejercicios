/*
 14)Un conductor necesita calcular la velocidad promedio que hizo en un  viaje ya concluído.
  Posee la distancia del viaje en kilómetros y el tiempo  en horas. */
  
var velocProm, distancia, tiempo

tiempo = parseFloat(prompt('Ingrese tiempo recorrrido en horas:'))
distancia = parseFloat(prompt('Ingrese distancia recorrida en km:'))
velocProm = distancia/tiempo;
console.log('La velocidad promedio es de '+velocProm+'km/h')
