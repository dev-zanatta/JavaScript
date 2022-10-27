/*Faça um algoritmo que receba o preço de um produto, calcule e mostre o novo preço, sabendo-se que este sofreu um desconto de 10%. */

let preco = Number.parseFloat(prompt("Insira o preco"))
let novoPreco = preco*0.9
alert("R$" + novoPreco)
