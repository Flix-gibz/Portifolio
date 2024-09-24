function encontrarMaiorNumero() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        
        const numero = parseInt(prompt(`Insira o ${i + 1}º número inteiro:`), 10);
        
        numeros.push(numero);
    }
      
    const maiorNumero = Math.max(...numeros);
   
    alert(`O maior número inserido é: ${maiorNumero}`);
}
encontrarMaiorNumero();
