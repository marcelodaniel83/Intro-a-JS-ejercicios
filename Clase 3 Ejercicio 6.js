/* Una pequeña empresa necesita un programa donde pueda ingresar el
presupuesto que tiene asignado para un trabajo y luego que pueda
ingresar uno por uno los gastos que debe hacer para llevar a cabo el
mismo. Al finalizar el programa el mismo deberá informar el total y si el
monto excede el presupuesto asignado y por cuánto. */

var presupuesto, gastos, exceso, finalizar

presupuesto = parseInt(prompt('Ingrese el presupuesto $'))


    do{
        gastos = parseInt(prompt('Ingrese el gasto  $'))
        finalizar = confirm('¿Desea continuar cargando los gastos?')
    }while(finalizar)
        
if(presupuesto>gastos){
    console.log('El total de gastos es $'+gastos)
    
}
 else if(presupuesto<gastos){
    exceso = gastos - presupuesto,
    console.log('El total de gastos $'+gastos +' y excede el presupuesto por $'+exceso)
    
    }
else{
    console.log('fin')
}
