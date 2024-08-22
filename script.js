const modalidades = ["Ginástica", "Judô", "Surfe", "Vôlei"];

//Com base na constante modalidade, 
//Coloque o número que represente o esporte do seu grupo
const escolha = 3;

document.querySelector('body').style.backgroundImage = "url('img/"+modalidades[escolha]+".png')";
document.querySelector('title').textContent = "Missão Olímpica | "+modalidades[escolha];
document.querySelector('h1').innerHTML = "Missão Olímpica <br> "+modalidades[escolha];

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

//Assim como a variável atual (acima)
//Crie uma variável com o nome pontos que inicie com 0

let pontos = 0;


function mostraPergunta(){
    if(atual >= perguntas[escolha].length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[escolha][atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    pontos += opcaoSelecionada.pontos;
    console.log(pontos);
    mostraPergunta();
}

function mostraResultado(){
    textoResultado.textContent = historiaFinal;
    caixaPerguntas.textContent = "Resultado";
    caixaAlternativas.textContent = "";
    podiumMedalhas();  
}

//crie uma função podiumMedalhas
//E verifique a quantidade de pontos
//  - Se pontos igual a 3 ganha bronze, dentro dessa condicional:
//    Utilize a linha de código abaixo para modificar o CSS e inserir uma medalha
//    caixaPrincipal.style.backgroundImage = "url('img/bronze.png')";
//    altere o textContent do caixaPerguntas para "Resultado da competição: 3 pontos é BRONZE!"
//  - Se pontos igual a 4 ganha prata
//    Utilize a linha de código abaixo para modificar o CSS e inserir uma medalha
//    caixaPrincipal.style.backgroundImage = "url('img/prata.png')";
//    altere o textContent do caixaPerguntas para "Resultado da competição: 4 pontos é PRATA!"
//  - Se pontos igual a 5 ganha ouro
//    Utilize a linha de código abaixo para modificar o CSS e inserir uma medalha
//    caixaPrincipal.style.backgroundImage = "url('img/ouro.png')";
//    altere o textContent do caixaPerguntas para "Resultado da competição: 5 pontos é OURO!"
//  - Se pontos menor que 3
//    Utilize a linha de código abaixo para modificar o CSS e inserir uma medalha
//    caixaPrincipal.style.backgroundImage = "url('img/perdeu.png')";
//    altere o textContent do caixaPerguntas para "Resultado da competição: PERDEU!";
//2 Dentro de cada SE altere o conteúdo de texto de caixaPerguntas exemplo
//     Quando ouro coloque "Resultado da competição: 3 pontos é BRONZE!";

function podiumMedalhas(){
    if(pontos==3){
        caixaPrincipal.style.backgroundImage = "url('img/bronze.png')"
        caixaPerguntas.textContent = "Resultado da competição: 3 pontos é BRONZE!";
    }
    if(pontos==4){
        caixaPrincipal.style.backgroundImage = "url('img/prata.png')";
        caixaPerguntas.textContent = "Resultado da competição: 4 pontos é PRATA!";
    }
    if(pontos==5){
        caixaPrincipal.style.backgroundImage = "url('img/ouro.png')";
        caixaPerguntas.textContent = "Resultado da competição: 5 pontos é OURO!";
    }
    if(pontos<3){
        caixaPrincipal.style.backgroundImage = "url('img/perdeu.png')";
        caixaPerguntas.textContent = "Resultado da competição: PERDEU!";
    }
}

mostraPergunta(); 