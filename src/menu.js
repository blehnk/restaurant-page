import { menu } from "./initial"

export function populatingM() {
    const textArea = document.createElement('div')
    textArea.classList.add("textArea")
    content.appendChild(textArea)

    const head = document.createElement('span')
    head.innerText = "Panic Perch Cafe Signature Drinks"
    textArea.appendChild(head)

    const menuLi = document.createElement('ul')

    for(let i = 0; i < 5; i++){
        const li = document.createElement('li')
        li.appendChild(document.createElement('span'))
        li.appendChild(document.createElement('p'))
        
        menuLi.appendChild(li)
    }

    menuLi.children[0].children[0].innerText = "\n\nFizzing Frenzy Fizz"
    menuLi.children[0].children[1].innerText = "A sparkling concoction of lemon, lime, and a hint of wild berry, topped with popping candy for an unexpected burst of flavor."

    menuLi.children[1].children[0].innerText = "\n\nTickling Tummy Tonic"
    menuLi.children[1].children[1].innerText = "A fizzy elixir made with ginger, mint, and a splash of seltzer water. Served with a whimsical twisty straw for maximum ticklishness."

    menuLi.children[2].children[0].innerText = "\n\nBubbling Butterflies Brew"
    menuLi.children[2].children[1].innerText = "A chamomile and butterfly pea flower tea infusion, served with a side of cotton candy clouds that melt into a sweet, calming potion."

    menuLi.children[3].children[0].innerText = "\n\nWhirling Worry Waffle"
    menuLi.children[3].children[1].innerText = "A crispy waffle tower adorned with a whirlwind of candy-coated chocolates, topped with a dollop of whipped cream, guaranteed to make your heart race with delight."

    menuLi.children[4].children[0].innerText = "\n\nDizzying Dessert Delight"
    menuLi.children[4].children[1].innerText = "A gravity-defying ice cream sundae featuring a topsy-turvy tower of sprinkles, whipped cream, and a cherry on top, all served on a whimsically tilted plate."

    textArea.appendChild(menuLi)

    const foot = document.createElement('span')
    foot.innerText = "*All drinks can be customized to your preference of dairy or plant-based milk."
    textArea.appendChild(foot)

    menuLi.classList.add('menuLi')
}
