const input = document.querySelector('#input')
const form = document.querySelector('#form')
const box = document.querySelector('#box')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if(input.value === ''){
        alert('plz enter some text')
        return
    }
    addItem()
})

const addItem = () => {
    const content = input.value
    const div = document.createElement('div')
    const para = document.createElement('p')
    const btn = document.createElement('button')
    div.classList.add('item')
    para.classList.add('content')
    btn.classList.add('delete-btn')
    para.innerText = content
    btn.innerText = 'Delete'
    div.append(para, btn)
    box.appendChild(div)
    input.value = ''
    
    btn.addEventListener('click', () => {
        box.removeChild(div)
    })
}