console.log("hello from app.js");

const nome = "jhon textor";

const age = 30;

const ans = parseInt(age) + String(nome) 
// porque o javascript concatena mesmo com os identificadores ??                                         
// No caso da concatenação, o operador + tem dois comportamentos principais:
// Soma: Quando ambos os operandos são números.
// Concatenação: Quando pelo menos um dos operandos é uma string.
console.log(ans)

const ans2 = `olá! meu nome é ${nome}, e tenho ${age} anos`//stringliterall, na minha opnião é mais facil de visualizar e rapido


const skyisblue = true;
if (2 + 2 === "4") { //double equals returns true, triple returns false
    console.log(`the sky is blue!`)
}else{
    console.log(`the sky is not blue!`)
}


//aula 1, 2, 3, 4 acima
// aula 5 abaixo


//desafio proprio
//eu quero que o console log a frase  "friend number 1 joined" quando tiver 1 amigo, 
// e a frase "chegou mais um, agora são numero!" quando for qualquer outro numero
// quero que a frase já esteja armazenada em uma variavel, onde "numero" mude 

// let friend = 0;
// while (friend !== 10) {    
//     if (friend == 0) {
//         console.log("friend number 1 joined");
//     } else {
//         let welcomeFriend = `chegou mais um, agora são ${friend}!`;
//         console.log(welcomeFriend);
//     }
//     friend += 1; 
// }


console.log(friend)