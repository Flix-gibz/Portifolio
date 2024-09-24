let diaSemana = parseInt(prompt("Insira um dia da semana de 1 a 7"));

switch(diaSemana){
    case 1:
        alert("Domingo");
        break;
    case 2:
         alert("Segunda");
         break;
    case 3:
         alert("Terça");
        break;
    case 4:
         alert("Quarta");
         break;
    case 5:
        alert("Quinta");
        break;
    case 6:
        alert("Sexta");
        break;
    case 7:
        alert("Sábado");
        break;
    default:
        alert("Seu numero não representa um dia da semana");
        break;
}

