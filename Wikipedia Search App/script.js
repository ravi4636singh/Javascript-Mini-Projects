const form = document.querySelector('#form');
const inputValue = document.querySelector('#search_box');
const button = document.querySelector('#search_btn');
const container = document.querySelector('#container');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    getResult();
})

const getResult = () => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${inputValue.value}`)
    .then(res => res.json())
    .then(data => {
        // console.log(datas.query.search);
        data.query.search.forEach(result => {
            const url = `https://en.wikipedia.org/?curid=${result.pageid}`
            // console.log(url);
            // console.log(result.snippet);
            container.insertAdjacentHTML("beforeend", `
            <h3 class="heading"><a href="${url}" target="_blank" style="text-decoration: none;">${result.title}</a>!</h3>
            <h5 class="snippet">${result.snippet}</h5>
            `)
        })
    })
}