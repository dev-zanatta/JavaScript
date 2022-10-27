/*    23. Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
        a. a idade dessa pessoa em anos;
        b. a idade dessa pessoa em meses; 
        c. a idade dessa pessoa em dias
        d. a idade dessa pessoa em semanas.*/

let anoNasc = Number(prompt("Insira o ano de nascimento"))
let anoAtual = Number(prompt("Insira o ano atual"))
let anos = anoAtual-anoNasc
let meses = (anoAtual-anoNasc)*12
let dias = meses*30
let semanas = dias/7
alert("Voce viveu " + anos + " anos, " + meses + " meses, " + semanas + " semanas, " + dias + " dias ")
