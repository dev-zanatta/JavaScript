/*Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar. Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero. */

let cent1 = Number(prompt("Insira a quantidade de moedas de 1 centavo"))
let cent5 = Number(prompt("Insira a quantidade de moedas de 5 centavos"))
let cent10 = Number(prompt("Insira a quantidade de moedas de 10 centavos"))
let cent25 = Number(prompt("Insira a quantidade de moedas de 25 centavos"))
let cent50 = Number(prompt("Insira a quantidade de moedas de 50 centavos"))
let real1 = Number(prompt("Insira a quantidade de moedas de 1 real"))
let total = cent1*0.01+cent5*0.05+cent10*0.1+cent25*0.25+cent50*0.5+real1*1
alert("Voce economizou um total de R$" + total)
