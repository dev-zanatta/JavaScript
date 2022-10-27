let catalogo = []
let entrada = {}

function adicionar(produto)
{
    catalogo.push(produto)
}
function pesquisar(indice)
{
    alert(catalogo[indice])
}
while(entrada.titulo!="sair")
{
    entrada.titulo = prompt("Insira o nome do filme ")
    if(entrada.titulo=="sair")
        break
    entrada.ano = prompt("Insira o ano do filme ")
    catalogo.push(entrada)
    //adicionar(entrada)
}

