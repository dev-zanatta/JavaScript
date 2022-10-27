function menu()
{
    alert("1 - Cadastrar cliente\n2 - Atendimento normal\n3 - Atendimento prioritario\n4 - Clientes atendidos\n5 - Clientes na fila\n6 - Sair")
}

function atendNormal()
{
    var atendido=fila_normal.shift()
    alert(atendido + " chegou sua vez\n")
    tot_atendidos++
    clientes_n--
    atendidos.push(atendido)
}

function atendPrio()
{
    var atendido=fila_prio.shift()
    alert(atendido + " chegou sua vez\n")
    tot_atendidos++
    clientes_p--
    atendidos.push(atendido)
}
function clientesFila()
{
    alert("Tem " + clientes_p + "pacientes na fila prioritaria e " + clientes_n + " pacientes na fila normal")
    var clientes_prio
    var clientes_norm 
    clientes_prio = fila_prio[0] + " normal\n"
    clientes_norm = fila_normal[0] + " prioritario\n"
    for(i=1;i<fila_prio.length;i++)
    {
        clientes_prio= clientes_prio + "\n" + fila_prio[i] + " prioritario\n"
    }
    for(i=1;i<fila_normal.length;i++)
    {
        clientes_normal= clientes_normal + "\n" + fila_normal[i] + " normal\n"
    }
    alert(clientes_norm + "\n" + clientes_prio)
    

}
function clientesAten()
{
    alert("\nForam atendidos " + tot_atendidos + " pessoas\n")
    todos_atendidos=atendidos[0]
    for(i=1;i<atendidos.length;i++)
    {
        todos_atendidos= todos_atendidos + "\n" + atendidos[i]
    }
    alert(todos_atendidos)
}
function cadastrar()
{
    
    nome = prompt("insira o nome")
    
    if (modofila = confirm("\nTem prioridade?\n")==true)
    {
        alert("entrou")
        fila_prio.push(nome)
        clientes_p++
    }
    else
    {
        alert("entrou2")
        fila_normal.push(nome)
        clientes_n++
        
    }
    alert("Tem " + clientes_n + " clientes na fila normal e " + clientes_p + " na fila prioritaria")
}

var nome
var modofila
var fila_prio = [];
var fila_normal = [];
var atendidos = []

var todos_atendidos
var clientes_n=0
var clientes_p=0
var tot_atendidos=0;
i=0;
var comando;

while(comando!=6)
{
    comando = prompt(menu())
    if(comando==1)
    {
        cadastrar()
    }
    else if(comando==2)
    {   
        atendNormal()
    }
    else if(comando==3)
    {
        atendPrio()
    }
    else if(comando==4)
    {
        clientesAten()
    }
    else if(comando==5)
    {
        clientesFila()
    }
}