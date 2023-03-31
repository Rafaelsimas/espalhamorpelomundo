let counter = 0

let nomeUsuario

let difusor
let spray
let refil

let precoDifusor
let precoSpray
let precoRefil

function btnLogin(){
 const dataUserInput = document.querySelector('.userNameInput').value
 let user = document.querySelector('.user')

 const screenHome = document.querySelector('.home')//Adicionar escondido
 const boxMain = document.querySelector('.box-main')//Remover class escon

 screenHome.classList.add('screenHiden')
 boxMain.classList.remove('screenHiden')

 nomeUsuario = dataUserInput
 user.innerHTML = nomeUsuario
 console.log(nomeUsuario);
 
}

function loja(){
    const screenHome = document.querySelector('.home')//Adicionar escondido
 const boxMain = document.querySelector('.box-main')//Remover class escon
 const sectionLoja = document.querySelector('#loja')

 screenHome.classList.add('screenHiden')
 boxMain.classList.add('screenHiden')
 sectionLoja.classList.remove('screenHiden')
}

function selectDifusores(seletor, descricaoDifusor, valorDifusor){

    difusor = descricaoDifusor
    precoDifusor = valorDifusor

const selected = document.querySelector('.difusores .selecionado')

    if(selected !== null){
        selected.classList.remove('selecionado')
    }else{
        counter += 1
    }

    const option = document.querySelector(seletor)
    option.classList.add('selecionado')
    realizarCompra()

}

function selectSpray(seletor, descricaoSpray, valorSpray){

    spray = descricaoSpray
    precoSpray = valorSpray

    const selected = document.querySelector('.spray .selecionado')

    if(selected !== null){
        selected.classList.remove('selecionado')
    }else{
        counter += 1
    }

    const option = document.querySelector(seletor)
    option.classList.add('selecionado')
    realizarCompra()
}

function selectRefil(seletor, descricaoRefil, valorRefil){

    refil = descricaoRefil
    precoRefil = valorRefil

    const selected = document.querySelector('.refil .selecionado')

    if(selected !== null){
        selected.classList.remove('selecionado')
    }else{
        counter += 1
    }

    const option = document.querySelector(seletor)
    option.classList.add('selecionado')
    realizarCompra()
}




function realizarCompra(){
    const botao = document.querySelector('.fazer-pedido')
        botao.innerHTML = '<h3>Fechar pedido</h3>'
        botao.classList.add('ativo')

    const precoTotal = precoDifusor + precoSpray + precoRefil
    const textoParaOUsuario = "Olá, tudo bem? Meu nome é: " + nomeUsuario + "  Gostaria de comprar estes itens: \n- Difusor: " + difusor + " \n- Spray: " + spray + " \n- Refil: " + refil + " \n- Total " + precoTotal.toFixed(2) + " "
    
    const mensagemParaWhatsapp = encodeURIComponent(textoParaOUsuario)
    const url = 'https://wa.me/5522981600405?text=' + mensagemParaWhatsapp

    botao.setAttribute('href', url)
}


function atualizacoes(){
    alert('Em breve daremos suporte a esta funcionalidade')
}

