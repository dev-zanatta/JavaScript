/*Faça um algoritmo que receba o valor dos catetos de um triângulo, calcule e mostre o valor da hipotenusa. */

let cateto1 = Number.parseFloat(prompt("Insira o cateto 1"))
let cateto2 = Number.parseFloat(prompt("Insira o cateto 2"))
let hipotenusa = (cateto1*cateto1) + (cateto2*cateto2)
hipotenusa= Math.sqrt(hipotenusa)
alert(hipotenusa)