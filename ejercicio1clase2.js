/*
   1 Una escuela primaria necesita un sistema en el que se ingrese un número del 1 al 10 y lo convierta
   en un número romano.El sistema debe rechazar cualquier número que no se encuentre en ese intervalo.
   */

var numero = 0

numero = prompt('Ingrese un numero: ')

if (numero >=1 && numero <= 10) {

    switch (numero) {

        case '1': 
            prompt('el numero 1 corresponde a I')
            break

            case '2': 
            prompt('el numero 2 corresponde a II')
            break

            case '3': 
            prompt('el numero 3 corresponde a III')
            break

            case '4':
            prompt('el numero 4 corresponde a 4')
            break

            case '5': 
            prompt('el numero 5 corresponde a V')
            break

            case '6':
            prompt('el numero 6 corresponde a VI')
            break

            case '7':
            prompt('el numero 7 corresponde a VII')
            break

            case '8':
            prompt('el numero 8 corresponde a VIII')
            break

            case '9':
            prompt('el numero 9 corresponde a IX')
            break

            case '10':
            prompt('el numero 10 corresponde a X')
            break

            default:
        prompt('numero invalido')
            
    }


} else {
  prompt('Error. Ingrese un numero del 1 al 10')
}
