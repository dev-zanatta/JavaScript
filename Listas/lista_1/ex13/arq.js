/*Faça um algoritmo que receba duas notas, calcule e mostre a média ponderada dessas notas, considerando peso 2 para a primeira nota e peso 3 para a segunda nota.*/

let nota1 = Number.parseFloat(prompt("Insira a primeira nota"))
let nota2 = Number.parseFloat(prompt("Insira a segunda nota"))
let media = (nota1*2 + nota2*3)/5
alert(media)