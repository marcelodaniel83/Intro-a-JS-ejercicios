/*4) Un comercio necesita un programa que le permita calcular el total de la compra de unidades de un mismo producto. 
Si la compra superase las 100 unidades del mismo se le hará un 15% de descuento sobre el total. */

/*

var total, cantidad, precioPorUnidad, descuento

cantidad = parseInt(prompt('ingrese cantidad de unidades: '))
precioPorUnidad = parseFloat(prompt('Ingrese precio: '))

if(cantidad >= 100){
  
  total = precioPorUnidad -(precioPorUnidad*0.15)
  
  
  alert('El total con descuento de %15 es $'+total)
}else{
  
  total = precioPorUnidad*cantidad
  alert('El total sin descuento es de $'+total)
}
