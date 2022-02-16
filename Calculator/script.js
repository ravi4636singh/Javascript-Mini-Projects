const outputScreen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if(button.innerText === 'AC'){
            outputScreen.value = '';
            return;
        }
        if(button.innerText === '='){
            outputScreen.value = eval(outputScreen.value);
            return;
        }
        outputScreen.value += button.innerText
    })
})