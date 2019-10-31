/*
3 Un matemático necesita una simple calculadora que le permita calcular
el factorial de un número. El factorial de un número se obtiene
multiplicando todos los números consecutivos desde el 1 hasta el objetivo
entre sí. Ej: 4! (factorial de cuatro) == 1 * 2 * 3 * 4 */


var numero = parseInt(prompt('Ingrese el número: '))
var factorial = 1

for(var i=2; i <=numero; i++){
    factorial = factorial*i;
}
console.log('El resultado es: '+factorial)
