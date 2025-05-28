let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio"; 


let nome = "Iuri";
function verificarConsole(){
    console.log(`Olá, ${nome} `); 
}

function verificarAlerta(){
    alert("Eu amo Js");
}

function verificarPrompt(){
    let nomeCidade = prompt("Digite o nome de alguma cidade do Brasil: ")
    alert(`Estive em ${nomeCidade} e lembrei de você! `);
}

function verificarSoma(){
let numero = prompt("Digite um numero: ");
let numero2 = prompt("Digite outro numero: ");
let soma = Number(numero) + Number(numero2);
alert(`A soma de ${numero} e ${numero2} é ${soma}`);
}


function maiorValor(num1){
    return num1 * num1;
}
let valMaior = maiorValor(parseInt(Math.random() * 10 + 1));
console.log(`O resultado do quadrado do número é ${valMaior}`);
