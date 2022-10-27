/*A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, 
uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa 50 gramas,
e que a rodela de hamburguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de 
sanduiches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários
para compra. */
const queijo = 0.05
const pres = 0.05
const carne = 0.1
let hamb = prompt("Insira a quantidade de hamburgueres")
alert("Sera necessario " + queijo*2*hamb + "KG de queijo, " + pres*hamb + "KG de presunto e " + carne*hamb + "KG de carne")
