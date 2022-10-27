/*    16. Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: 
        a. o novo peso se a pessoa engordar 15% sobre o peso digitado;
        b. o novo peso se a pessoa emagrecer 20% sobre o peso digitado. */

let peso = Number.parseFloat(prompt("Insira seu peso em kg"))
let pesoEng = peso*1.15
let pesoEmag = peso*0.8
alert("Tera " + pesoEng + " KG se engordar e " + pesoEmag + " KG se emagrecer")
