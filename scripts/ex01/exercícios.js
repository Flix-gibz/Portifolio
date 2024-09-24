let input = prompt("Insira o número:")
let numero = parseFloat(input)

if (isNaN(numero)){
    alert("A entrada não é um numero valido!")
}
 else {
    if(numero > 0) {
        alert("O numero é positivo")
    } else if (numero < 0) {
        alert("O numero é negativo")
    } else if(numero = 0){
        alert("O numero é neutro")
    }
}