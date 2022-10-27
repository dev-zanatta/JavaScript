/*Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer X litros de refresco (informados pelo usuário). */

let suco = Number(prompt("Insira a quantidade de litros de suco a ser feito"))

let agua = suco*0.8
let sucoMaracuja = suco*0.2
alert("Sera necessario " + agua + " litros de agua e " + sucoMaracuja + " litros de suco de maracuja")

