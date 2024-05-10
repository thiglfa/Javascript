let texto = document.querySelector('#idTexto')
//Limpar o texto
texto.addEventListener('keydown', ()=>{
    let resultado = document.querySelector('#res')
    resultado.innerHTML = ''
    texto.value = ''
})
//Mostrar o código da tecla
texto.addEventListener('keyup', (e)=>{
    let resultado = document.querySelector('#res')
    resultado.innerHTML = `A tecla ${text.value} = ${e.keyCode}`
})