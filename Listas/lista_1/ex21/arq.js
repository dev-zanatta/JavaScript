/*Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse funcionário. */

let salarioMin = Number.parseFloat(prompt("Insira o salario minimo"))
let salarioFunc = Number.parseFloat(prompt("Insira o salario do funcionario"))
let cont = salarioFunc/salarioMin
alert(cont + " vezes o salario minimo")