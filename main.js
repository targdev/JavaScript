/* MouseEvent */

var mouseevent = document.querySelector(' .button')
mouseevent.addEventListener('click', clicar)
mouseevent.addEventListener('mouseenter', entrar)
mouseevent.addEventListener('mouseout', saiu)

function clicar() {
  mouseevent.innerText = 'Clicou! =D'
  mouseevent.style.background = 'black'
  mouseevent.style.color = 'red'
}
function entrar() {
  mouseevent.innerText = 'Entrou! =)'
  mouseevent.style.background = 'grey'
  mouseevent.style.color = 'white'
}
function saiu() {
  mouseevent.innerText = 'Saiu... =('
  mouseevent.style.background = 'red'
  mouseevent.style.color = 'black'
}

/* calculadora básica */

function somar() {
  var boxn1 = document.querySelector('#boxn1')
  var boxn2 = document.querySelector('#boxn2')
  var res = document.querySelector('#res .result')
  var n1 = Number(boxn1.value)
  var n2 = Number(boxn2.value)
  var r = n1 + n2
  res.innerHTML = `A soma de ${n1} + ${n2} é igual a <strong>${r}</strong>.`
}

/* Localização */

function buscar() {
  var pais = document.querySelector('input#pais')
  var local = document.querySelector('#local')
  var result = String(pais.value)
  local.innerHTML = `Você é do(a) ${result}`

  if (result == 'Brasil' || result == 'brasil') {
    local.innerHTML += `<p>Kuakuakuakuakuakua br br br </p>`
  } else {
    local.innerHTML += `<p>Você é estrangeiro(a).</p>`
  }
}

/* Idade para votar */

function verificar() {
  var idade = document.querySelector('input#idade')
  var votacao = document.querySelector('#resvote')
  var resvote = Number(idade.value)

  if (resvote < 16) {
    votacao.innerHTML = `Não pode votar, você tem apenas ${resvote} anos`
  } else if (resvote < 18 || resvote > 65) {
    votacao.innerHTML = `Voto opcional, você tem ${resvote} anos`
  } else {
    votacao.innerHTML = `Voto é obrigatório, você tem ${resvote} anos!`
  }
}
