 function calcularSoma() {
    let soma = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Insira um numero(ou 0 para sair):"));
        if (numero !== 0){
            soma += numero;
        }
    } while(numero !== 0);

    alert('A soma de todos os números inseridos é:' (numero));
 }   

 calcularSoma();