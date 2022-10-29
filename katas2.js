
 //EXERCICIO 1

 function add(n1, n2){
    return n1 + n2 ;

 }
 console.log(add(1, 1));


// EXERCICIO 2


 function multiply(numero, Nnumeros) {
    let resultado = 0;
    // A função count() é usada para contar o número de coleções no elemento.
    for( let count = 1; count <= Nnumeros; count = add(count, 1)){
        resultado = add(resultado, numero);
    }
    return resultado;
 }

 console.log(multiply(6, 8));


 //EXERCICIO 3

 function power(numero, potencia) {
    let saida = 1;
    for(let contador = 1; contador <= potencia; contador = add(contador, 1)){
        saida = multiply(numero, saida);
    }
    return saida;
 }
 console.log(power(2, 8));


 // EXERCICIO 4 

 function factorial(factorial) {
    let fatorador = 1;
    for(let contador = 1; contador <= factorial; contador = add(contador, 1)){
        fatorador = multiply(fatorador, contador);
    }
    return fatorador;

 }
 console.log(factorial(4));

