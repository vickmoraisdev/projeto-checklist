// VARIÁVEIS
const item = document.getElementById('item')
const form = document.querySelector('form')
const lista = document.querySelector('ul')

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