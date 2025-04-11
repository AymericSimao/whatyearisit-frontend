// document.querySelector('#year').textContent = "test" //permet de tester si j'arrive bien à modifier mon html

fetch('https://whatyearisit-backend-iota-dun.vercel.app/year')
.then(response => response.json())
.then(data => {
    document.querySelector('#year').textContent = data.date
})
