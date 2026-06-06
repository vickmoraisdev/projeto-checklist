// VARIÁVEIS
const item = document.getElementById('item')
const form = document.querySelector('form')
const lista = document.querySelector('ul')
const div = document.querySelector('div#alertID')

// Item adicionado, evento de submit(enviado)
form.addEventListener('submit', (event) => {
    event.preventDefault()

    // Verificando se o usuário digitou nada, se estiver vazio, retorna um alerta.
    const nothingTyped = (item.value).trim()
    if(nothingTyped === ''){
        window.alert('[ERRO] Não é possível adicionar um campo vazio. Digite algo!')
        item.value = ''
        return
    }

    // Se tudo certinho, cria a nova linha
    const novaLi = document.createElement('li')
    newLine(novaLi)
    item.value = ''
    
})

// Criação da nova linha
function newLine(novaLinha) {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    novaLinha.appendChild(checkbox)

    const text = document.createElement('span')
    text.textContent = `${item.value}`
    novaLinha.appendChild(text)

    const button = document.createElement('button')
    button.classList.add('botaoLixoX')

    const icon = document.createElement('i')
    icon.classList.add("ph", "ph-trash")
    button.appendChild(icon)

    novaLinha.appendChild(button)

    lista.appendChild(novaLinha)
}

// Verifica o clique na lista (ul)
lista.addEventListener('click', (event) => {

    checkboxChecked(event)
    trashButton(event)
})

function checkboxChecked(event) {
    // Se for marcado, aparece uma linha. Se desmarcar, a linha sai
    if(event.target.type === 'checkbox'){
        const checkbox = event.target
        const li = event.target.parentElement
        const text = li.querySelector('span')

        if(checkbox.checked){
            text.classList.add('concluido')
        }else{
            text.classList.remove('concluido')
        }
    }
}

function trashButton(event) {
    // O target descobre o alvo exato clicado
    const buttonClicked = event.target.closest('.botaoLixoX')

    // Remove o item
    if(buttonClicked){
        buttonClicked.parentElement.remove()

        // Alerta aparece
        alertRed()
    }
}

// Aparece o alerta e some depois de 3 segundos
function alertRed() {
    div.classList.add('show-alert')
    
        setTimeout(() => {
        div.classList.remove('show-alert')
    }, 3000);
}

// Remove o alerta quando clica no X
div.addEventListener('click', (event) => {
    const buttonClicked = event.target.closest('#xis')

    if(buttonClicked){
        div.classList.remove('show-alert')
    }
    
})