/*A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou. */

let latas = Number(prompt("Insira a quantidade de latas de 350 ml compradas"))
let garraf = Number(prompt("Insira a quantidade de garrafas de 600 ml compradas"))
let pets = Number(prompt("Insira a quantidade de garrafas de 2l compradas"))

let total = latas*0.35 + garraf*0.6 + pets*2
alert("Foram comprados " + total + " l de Meia-Cola")
