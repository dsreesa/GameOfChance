//Create the computer's decision
const choices = ["rock","paper","scissors" ];
let i =Math.floor(Math.random()*3);
let ComChoice = choices[i];


let convert = function(word){
  if (word === "rock") return '<i class="far fa-hand-rock"></i>'
  if (word === "paper" ) return '<i class="far fa-hand-paper"></i>'
  else return '<i class="far fa-hand-scissors"></i>'
}

let game =function(UserChoice){
  let box = document.getElementById("challenge");
  box.style.display = "inline-flex";
let userDiv =document.getElementById("YourObject");
userDiv.innerHTML = convert(UserChoice);
let comDiv =document.getElementById("ComObject");
comDiv.innerHTML = convert(ComChoice);
if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
  return alert("You win : )")
}
else if(UserChoice === ComChoice){
  return alert("Draw!!!")
}
else{
  return alert("You Lose :( Try again!");
}
}


game(UserChoice)

