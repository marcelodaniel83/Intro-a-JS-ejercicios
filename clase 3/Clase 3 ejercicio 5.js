/* En una entrevista de trabajo le solicitan hacer un FizzBuzz, éste
programa muestra los números del 1 al 10, pero con las siguientes
características: siempre se muestra el número al usuario salvo que sea
divisible por 3, en cuyo caso se muestra la palabra Fizz, o divisible por 5,
en cuyo caso se muestra la palabra Buzz. Si es divisible tanto por 5 como
por 3, se mostrará FizzBuzz. */


for (var i=1; i <= 10; i++)
{
    
      if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
        else if( i%3==0 && i%5==0)
        console.log("FizzBuzz");
    else
        console.log(i);

}
