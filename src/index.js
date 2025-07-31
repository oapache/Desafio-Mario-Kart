
const player1 = {
 Nome : "Mario",
 Velocidade: 4,
 Manobrabilidade: 3,
 Poder: 3,
 Pontos: 0,
}


const player2 ={

 Nome : "Luigi",
 Velocidade: 3,
 Manobrabilidade: 4,
 Poder: 4,
 Pontos: 0,
}

async function rollDice (){
return Math.floor(Math.random() * 6) + 1;

}

async function getRandomBlock (){

 let random = Math.random()
 let result 


 switch (true) {
  case random <0.33:
   result = "RETA"
   break;
   case random < 0.66: 
   result = "CURVA";
   break
 
  default:
  result = "CONFRONTO"
 }

 return result

}

async function logRollResult(characterName,block, diceResult, attribute) {

 console.log (`${characterName.Nome}🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute} `)
 
 
}


async function playRaceEngine(character1, character2) {
 for (let round = 1; round <=5; round ++ ) {
  console.log(`🏁 Rodada ${round}`)
  // sortear bloco 
  let block =  await getRandomBlock()
  console.log (`Bloco: ${block}`)

  // rolar os dados
let diceResult1 = await rollDice();
let diceResult2 = await rollDice();

//teste de habilidade

let TotaltestSkill1 = 0;
let TotaltestSkill2 = 0;

if (block == "RETA"){
 TotaltestSkill1 = diceResult1 + character1.Velocidade;
 TotaltestSkill2 = diceResult2 + character2.Velocidade;

 await logRollResult(character1,"velocidade",diceResult1,character1.Velocidade)
 await logRollResult(character2,"velocidade",diceResult2,character2.Velocidade)


}
if (block == "CURVA"){
 TotaltestSkill1 = diceResult1 + character1.Manobrabilidade;
 TotaltestSkill2 = diceResult2 + character2.Manobrabilidade;

 await logRollResult(character1,"Manobrabilidade",diceResult1,character1.Manobrabilidade)
 await logRollResult(character2,"Manobrabilidade",diceResult2,character2.Manobrabilidade)

}
if (block == "CONFRONTO"){

 let powerResult1 = diceResult1 + character1.Poder;
 let powerResult2 = diceResult2 + character2.Poder;

 
 console.log (`${character1.Nome} confrontou com ${character2.Nome} 🥊`)

 await logRollResult(character1,"Poder",diceResult1,character1.Poder)
 await logRollResult(character2,"Poder",diceResult2,character2.Poder)

 if (powerResult1 > powerResult2) {
  character1.Pontos++;
  console.log(`${character1.Nome} venceu o confronto e marcou um ponto! ${character2.Nome} perdeu um ponto! 🍌 \n---------------------------`);
} else if (powerResult2 > powerResult1) {
  character2.Pontos++;
  console.log(`${character2.Nome} venceu o confronto e marcou um ponto! ${character1.Nome} perdeu um ponto! 🍌\n---------------------------`);
} else {
  console.log("");
  // console.log("Confronto empatado! Nenhum ponto foi marcado.\n");

  
 }
 
{

  
 }

 if (powerResult1 == powerResult2){
  {
   console.log ("👊👊 Confronto equilibrado! Nenhum dos pilotos saiu ferido… por enquanto! \n")

   
  }
  
 }
 



}
// Verificando o vencedor

if (TotaltestSkill1 > TotaltestSkill2){

 console.log (`${character1.Nome} marcou um ponto \n ---------------------------` )
 character1.Pontos++;
}

else if (TotaltestSkill2 > TotaltestSkill1)
 console.log (`${character2.Nome} marcou um ponto \n ---------------------------`)

 character2.Pontos++;
 }

 }
async function declareWinner(character1,character2) {
 console.log ("Resultado final:")
 console.log (`${character1.Nome}: ${character1.Pontos} ponto(s)`)
 console.log (`${character2.Nome}: ${character2.Pontos} ponto(s)`)

 if (character1.Pontos > character2.Pontos){

  console.log (`\n ${character1.Nome} venceu a corrida! Parabéns! 🏆`)
 }
 
 else if (character2.Pontos > character1.Pontos){

  console.log (`\n ${character2.Nome} venceu a corrida! Parabéns! 🏆`)
 }

 else (character2.Pontos > character1.Pontos)

  console.log (`\n A corrida entre os dois (a) terminou em empate.`)
 }
 
 

(async function main() {
 console.log (`🏁🚨 Corrida entre ${player1.Nome} e ${player2.Nome}.... \n ---------------------------`);
 await playRaceEngine (player1, player2);
 await declareWinner (player1, player2);

})();