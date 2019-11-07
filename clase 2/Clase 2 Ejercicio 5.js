/* 5) El mismo comercio necesita otro sistema para las compras de otro producto.
Si el total superase los $2.000 se le hará un 20% de descuento, si solo supera los $1.000 un 10% y por debajo de esto ningún descuento.
*/

var precio, descuento, total

precio = parseFloat(prompt('Ingrese precio $ '))

if (precio >2000){
  
  total= precio -(precio*0.15)
  alert('El precio con 20% de descuento es de $'+total)  
}
else if(precio >=1000  && precio<=1999) {
  
  total = precio -(precio*0.10)
  alert('El precio con 10% de descuento es de $'+total)
}
 else {
            
    alert ('El total sin descuento es de $'+total)
          } 
