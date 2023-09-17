import { menu } from "./initial"

// const mainContent = document.createElement('div')

// mainContent.classList.add("noShow")

// content.appendChild(mainContent)

export function populatingM() {
    const textArea = document.createElement('div')
    textArea.classList.add("textArea")
    content.appendChild(textArea)

    const head = document.createElement('span')
    head.innerText = "Anxiety Cafe Signature Drinks"
    textArea.appendChild(head)

    const menuLi = document.createElement('ul')

    for(let i = 0; i < 5; i++){
        const li = document.createElement('li')
        li.appendChild(document.createElement('span'))
        li.appendChild(document.createElement('p'))
        
        menuLi.appendChild(li)
    }

    menuLi.children[0].children[0].innerText = "Tranquilitea Elixir"
    menuLi.children[0].children[1].innerText = "A soothing blend of chamomile, lavender, and lemon balm, gently sweetened with local honey. Served hot or iced."

    menuLi.children[1].children[0].innerText = "Zen Garden Matcha Latte"
    menuLi.children[1].children[1].innerText = "Creamy matcha green tea with a touch of vanilla, topped with frothed almond milk and a sprinkle of edible rose petals."

    menuLi.children[2].children[0].innerText = "Mood Boosting Smoothie"
    menuLi.children[2].children[1].innerText = "A refreshing concoction of spinach, banana, berries, and a hint of ginger, blended to perfection. Packed with antioxidants and natural mood enhancers."

    menuLi.children[3].children[0].innerText = "Serene Lavender Latte"
    menuLi.children[3].children[1].innerText = "A velvety latte infused with house-made lavender syrup, creating a delicate floral aroma and a sense of calm with every sip."

    menuLi.children[4].children[0].innerText = "Euphoric Espresso Tonic"
    menuLi.children[4].children[1].innerText = "A unique combination of bold espresso, sparkling tonic water, and a splash of citrus. A zesty and invigorating pick-me-up."

    textArea.appendChild(menuLi)

    const foot = document.createElement('span')
    foot.innerText = "All drinks can be customized to your preference of dairy or plant-based milk."
    textArea.appendChild(foot)



}
