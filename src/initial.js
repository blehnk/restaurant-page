
const content = document.querySelector('#content')
const restName = document.createElement('h1')
export const btn = document.createElement('div')
export const about = document.createElement('button')
export const menu = document.createElement('button')
const dummy = document.createElement('div')


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

content.appendChild(dummy)

//export{mainContent, menu, about}