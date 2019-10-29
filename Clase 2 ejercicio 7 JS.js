/* 7) Un médico necesita un sistema que le permita calcular el índice de masa corporal.
El mismo se obtiene al dividir el peso en kilogramos por la altura en metros al cuadrado (peso / altura2). 
Si se obtiene un valor entre 18.5 y 25 el peso es normal, meno que esto es peso bajo y más que esto sobrepeso.
*/



var peso, altura, imc

peso = parseFloat(prompt('Ingresar peso: '))
altura = parseFloat(prompt('Ingresar altura: '))
imc = peso/(altura*altura)

if (imc >= 18.5 && imc <=25){
  
  alert('El peso es normal')
  
}else if (peso <18.5) {
  alert('El peso es bajo')
} else {
  alert('Sobrepeso')
}
