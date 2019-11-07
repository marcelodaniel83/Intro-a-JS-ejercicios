/*  3) Un salón de fiestas necesita un sistema donde se pueda ingresar la
cantidad de invitados a una fiesta y la cantidad de personas que entran
en un mesa y calcule cuántas mesas se necesitarán para la fiesta, si hay
alguna que quede incompleta y cuánta gente habría en esa mesa. 

*/

var cantInvitados = 0;
var cantEnMesa = 0;
var mesas = 0;
var habria = 0;

cantInvitados = prompt('ingrese cantidad de invitados:')
cantEnMesa = prompt('ingrese cantidad de personas en una mesa: ')


if (cantInvitados && cantEnMesa){
  
  mesas = cantInvitados/cantEnMesa 
  habria = cantInvitados%cantEnMesa 
  
  alert('La cantidad de mesas necesaria es de: '+mesas +', '+ 'y habría'+habria +'personas en la mesa incompleta')
  
} else 
  {
    
    alert('Por favor, ingrese una cantidad')
  }
