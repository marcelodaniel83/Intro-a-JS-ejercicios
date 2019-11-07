/*
   1 Una escuela primaria necesita un sistema en el que se ingrese un número del 1 al 10 y lo convierta
   en un número romano.El sistema debe rechazar cualquier número que no se encuentre en ese intervalo.
   */


var numero = 0

numero = prompt('Ingrese un numero: ')

if (numero >=1 && numero <= 10) {

    switch (numero) {

        case '1': 
            alert('el numero 1 corresponde a I')
            break

            case '2': 
            alert('el numero 2 corresponde a II')
            break

            case '3': 
            alert('el numero 3 corresponde a III')
            break

            case '4':
            alert('el numero 4 corresponde a 4')
            break

            case '5': 
            alert('el numero 5 corresponde a V')
            break

            case '6':
            alert('el numero 6 corresponde a VI')
            break

            case '7':
            alert('el numero 7 corresponde a VII')
            break

            case '8':
            alert('el numero 8 corresponde a VIII')
            break

            case '9':
            alert('el numero 9 corresponde a IX')
            break

            case '10':
            alert('el numero 10 corresponde a X')
            break

            default:
        alert('numero invalido')
            
    }


} else {
  alert('Error. Ingrese un numero del 1 al 10')
}
