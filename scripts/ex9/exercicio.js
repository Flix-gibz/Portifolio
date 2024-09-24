let numeros = [2, 3, 5, 7, 8, 12, 17, 18, 19, 22, 27, 31, 34, 35, 42, 43, 51, 56, 58, 64, 66, 78, 84, 89, 93, 112, 256, 389, 472, 583, 698, 741.];
    let valorEspecifico;

    // Solicita ao usuário que insira um valor específico e continua solicitando até receber um número válido
    do {
        valorEspecifico = prompt("Insira um valor específico:");
        
        // Verifica se o valor inserido é um número válido
        if (isNaN(valorEspecifico) || valorEspecifico === "") {
            alert("Por favor, insira um número válido.");
        } else {
            valorEspecifico = parseInt(valorEspecifico, 10);
        }
    } while (isNaN(valorEspecifico) || valorEspecifico === "");

    // Inicializa um vetor vazio para armazenar números maiores que o valor específico
    let maioresQueValor = [];

    // Percorre o vetor de números
    for (let i = 0; i < numeros.length; i++) {
        // Verifica se o número atual é maior que o valor específico
        if (numeros[i] > valorEspecifico) {
            // Adiciona o número ao vetor maioresQueValor se a condição for verdadeira
            maioresQueValor.push(numeros[i]);
        }
    }

    // Verifica se o vetor maioresQueValor contém algum número
    if (maioresQueValor.length > 0) {
        // Exibe uma mensagem com os números maiores que o valor específico
        alert("Os números maiores que " + valorEspecifico + " são: " + maioresQueValor.join(", ") + ".");
    } else {
        // Exibe uma mensagem indicando que nenhum número é maior que o valor específico
        alert("Não há números maiores que " + valorEspecifico + " no vetor.");
    }