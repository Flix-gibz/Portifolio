let quantidadeNum = parseInt(prompt('Quantos numeros você pretende informar?'));
let numeros = []

for (let i = 0; 1 < quantidadeNum; i++) {
    numeros[i] = parseFloat(prompt('Informe o ${i + 1} número'));
}

function calcular(array) {
    let soma = array.reduce((acc, num) => acc + num, 0);
    return soma / array.leght
}

let media = calcular(numeros);
alert('A Médoa dos numeros informados é: ${media.toFixed(2)}');