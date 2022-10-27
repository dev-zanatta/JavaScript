/*Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, calcule e mostre a comissão e o salário final do funcionário. */

let salario = Number.parseFloat(prompt("Insira o salario fixo"))
let vendas = Number.parseFloat(prompt("Insira o valor total das vendas"))
let comissao = vendas*0.04
let salarioNovo = salario + comissao
alert("R$" + salarioNovo)

