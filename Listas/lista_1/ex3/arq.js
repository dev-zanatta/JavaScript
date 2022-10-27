/*A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra. 
Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado funcionário. 
Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos. */

let horasN = Number(prompt("Insira a quantidade de horas normais trabalhadas"))
let horasE = Number(prompt("Insira a quantidade de horas extras"))
let salarioB = horasN*10.00 + horasE*15.00
let salarioL = salarioB * 0.9
alert("Salario Bruto: " + salarioB + "\nSalario Liquido: " + salarioL)