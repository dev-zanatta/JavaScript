/*João recebeu seu salário de R$ 1200,00 e precisa pagar duas contas (C1=R$ 200,00 e C2=R$120,00) que estão atrasadas. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre cada conta. Faça um algoritmo que calcule e mostre quanto restará do salário do João */

let salario = 1200
let c1=200
let c2=120
let multac1 = c1*0.02
let multac2 = c2*0.02
salario = salario - multac1 - multac2
alert("Sobrara R$" + salario + " do seu salario")