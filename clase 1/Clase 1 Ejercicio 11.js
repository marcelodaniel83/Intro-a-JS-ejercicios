/* Ejercicio 11 clase 1---------------------------------------------------------------

11) Una persona necesita calcular la cantidad de agua necesaria para llenar  una pileta en litros y galones.
 Posee el ancho, el alto y la profundidad de  la pileta en metros.
  Asumir que la pileta es un prisma rectangular. */

  var ancho, alto, profundidad, metroCubico, cantidadNecesaria;

  ancho = parseFloat(prompt('ingrese ancho:'))
  alto = parseFloat(prompt('ingrese alto:'))
  profundidad = parseFloat(prompt('ingrese profundidad:'))

  metroCubico = ancho*alto*profundidad;
  cantidadNecesaria = metroCubico*1000;

  console.log('la cantidad de agua necesaria en litros es de:'+cantidadNecesaria)
