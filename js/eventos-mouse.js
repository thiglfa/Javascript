let minhaDiv = document.querySelector('#div1')

minhaDiv.addEventListener('mouseenter', entrar)
minhaDiv.addEventListener('mouseout', sair)
minhaDiv.addEventListener('click', clicar)
minhaDiv.addEventListener('contextmenu', clickDireito)

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