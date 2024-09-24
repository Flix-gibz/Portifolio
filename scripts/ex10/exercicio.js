 // Define um vetor de palavras com várias frutas, algumas repetidas
 let palavras = ["Maçã", "Banana", "Laranja", "Morango", "Abacaxi", "Manga", "Uva", "Pêra", "Melancia", "Kiwi", "Cereja", "Pêssego", "Melão", "Ameixa", "Framboesa", "Maracujá", "Goiaba", "Jabuticaba", "Coco", "Nectarina", "Caqui", "Tâmara", "Damascos", "Graviola", "Mirtilo", "Cabeludinha", "Lucuma", "Rambutan", "Longan", "Physalis", "Mangaba",  "Pitanga", "Figo", "Jaca", "Açaí", "Tangerina", "Romã", "Carambola", "Cupuaçu", "Maçã", "Banana", "Laranja", "Morango", "Abacaxi", "Manga", "Uva", "Pêra", "Melancia", "Kiwi", "Cabeludinha", "Figo", "Maçã", "Banana", "Laranja", "Morango", "Abacaxi", "Manga", "Uva", "Pêra", "Melancia", "Maçã", "Banana", "Laranja", "Morango", "Abacaxi", "Manga", "Uva", "Pêra"];
  
 // Função para verificar se a entrada é uma palavra válida (não numérica e não vazia)
 function isValidWord(word) {
   return isNaN(word) && word.trim() !== "";
 }

 // Solicita ao usuário que insira o nome da fruta a ser contada
 let palavraEspecifica = prompt("Digite o nome da fruta que você deseja contar, digite a primeira letra em maiúsculo por favor:");

 // Verifica se a entrada do usuário é válida
 if (isValidWord(palavraEspecifica)) {
   let contagem = 0;

   // Percorre o vetor de palavras
   for (let i = 0; i < palavras.length; i++) {
     // Verifica se a palavra no vetor é igual à palavra específica
     if (palavras[i] === palavraEspecifica) {
       // Incrementa a contagem se a palavra for encontrada
       contagem++;
     }
   }

   // Exibe o número de ocorrências da palavra específica no vetor
   alert("A fruta '" + palavraEspecifica + "' aparece " + contagem + " vezes no vetor.");
 } else {
   // Exibe uma mensagem de erro se a entrada for inválida
   alert("Entrada inválida. Por favor, digite uma palavra válida com a primeira letra em maiúsculo.");
 }