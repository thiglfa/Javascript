let minhaDiv = document.querySelector('#div1')

minhaDiv.addEventListener('mouseenter', entrar)
minhaDiv.addEventListener('mouseout', sair)
minhaDiv.addEventListener('click', clicar)
minhaDiv.addEventListener('contextmenu', clickDireito)
minhaDiv.addEventListener('dblclick', clickDuplo)
minhaDiv.addEventListener('mousemove', mover)
minhaDiv.addEventListener('mousedown', apertar)
minhaDiv.addEventListener('mouseup', soltar)

function soltar(){
    minhaDiv.innerHTML = 'Você Soltou'
    minhaDiv.style.backgroundColor = 'lime'
}
function apertar(){
    minhaDiv.innerHTML = 'Você Apertou'
    minhaDiv.style.backgroundColor = 'aqua'
}
function mover(e){
    let x = e.clientX
    let y = e.clientY
    let res = document.querySelector('span')
    res.innerHTML = `Posição X: ${x} e Y: ${y}`

}
function clickDuplo(){
    minhaDiv.innerHTML = 'Click Duplo!'
    minhaDiv.style.backgroundColor = 'red'

}
function clickDireito(e){
    e.preventDefault()
    minhaDiv.innerHTML = 'Click Direito!'
    minhaDiv.style.backgroundColor = 'pink'

}
function clicar(){
    minhaDiv.innerHTML = 'Você clicou!'
    minhaDiv.style.backgroundColor = 'orange'

}
function sair(){
    minhaDiv.innerHTML = 'Você saiu!'
    minhaDiv.style.backgroundColor = 'green'

}
function entrar(){
    minhaDiv.innerHTML = 'Você entrou!'
    minhaDiv.style.backgroundColor = 'blue'

}