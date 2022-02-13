const quoteBox = document.querySelector('#quote');
const button = document.querySelector('#new_quote_btn');
let randomNum = Math.floor(Math.random()*1600)

addEventListener('load', () => getNewQuote(randomNum))

button.addEventListener('click', () => {
    randomNum = Math.floor(Math.random()*1600)
    quoteBox.innerText = ''
    getNewQuote(randomNum)
})

const getNewQuote = (randomNum) => {
    // alert('It\'s working');
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
        const newData = data[randomNum].text
        quoteBox.innerText = newData
    })
}