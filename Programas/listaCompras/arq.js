//lista de compras

function adicionar(produto)
{
    lista.push(produto)
}
let lista = []
let i=0
let entrada
while(entrada!="sair")
{
    entrada = prompt("Insira o produto para ser colocado na lista de compras. Digite sair para sair\n")
    adicionar(entrada)
    i++
}
lista.pop()
alert(lista)
