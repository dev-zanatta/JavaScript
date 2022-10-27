/*Calcule o volume de uma caixa d'água cilíndrica. */

let raio = Number.parseFloat(prompt("Insira o raio do cilindro"))
let altura = Number.parseFloat(prompt("Insira a altura do cilindro"))
let volume = 3.14*raio*raio*altura
alert("O volume e " + volume + " litros")