
const content = document.querySelector('#content')
const restName = document.createElement('h1')
const btn = document.createElement('div')
const about = document.createElement('button')
const menu = document.createElement('button')

restName.classList.add('restName')
content.appendChild(restName)

btn.classList.add('btn')
about.classList.add('about')
menu.classList.add('menu')

btn.appendChild(about)
btn.appendChild(menu)

content.appendChild(btn)

restName.innerText = "ANXIETY CAFE"
about.innerText = "About"
menu.innerText = "Menu"