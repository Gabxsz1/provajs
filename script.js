let NomeDaPessoa = document.getElementById("text")
let texto = document.getElementById("EnviarResultado")

function Enviar()
{
    texto.innerHTML = "Olá, " + NomeDaPessoa.value + " tudo bem?"
}

//Crie um programa que leia dois numeros e mostre a soma entre eles

let valor1 = document.getElementById("valor01");
let valor2 = document.getElementById("valor02");
let resultado = document.getElementById("Resultado")

function somar()
{
    resultado.innerHTML = parseInt(valor01.value) + parseInt(valor02.value)
}

let numero = document.getElementById("numero")
let proximo = document.getElementById("proximo")
let anterior = document.getElementById("anterior")

function calcular()
{
    proximo.innerHTML = parseInt(numero.value) + 1;
    anterior.innerHTML = parseInt(numero.value) - 1;
}