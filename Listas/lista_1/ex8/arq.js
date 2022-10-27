/*Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, faça um algoritmo para ler os dados necessários e calcular a altura do prédio.*/

let alturaP = Number.parseFloat(prompt("Insira a sua altura em metros"))
let sombraP = Number.parseFloat(prompt("Insira a sua sombra em metros"))
let sombraPred = Number.parseFloat(prompt("Insira a sombra do predio"))

let alturaPred =(alturaP*sombraPred)/sombraP
alert("Altura do predio: " + alturaPred)
