
// const mainContent = document.createElement('div')

// mainContent.innerText = "hi, this is the about section:)"
// mainContent.classList.add("noShow")

// content.appendChild(mainContent)


import { about } from "./initial"

export function populatingA() {
    const textArea = document.createElement('div')
    textArea.classList.add("textArea")
    content.appendChild(textArea)

    const textBody = document.createElement('span')

    const span = document.createElement('span') 
    span.innerText = "Welcome to Anxiety Cafe!"
    const p1 = document.createElement('p')
    p1.innerText = "At Anxiety Cafe, we believe in nourishing not only your body but also your soul. Nestled in the heart of [City/Town], we've created a warm and inviting space where you can find comfort, community, and of course, delicious food."

    const p2 = document.createElement('p')
    p2.innerText = "Our journey began with a simple yet powerful idea: to create a haven for those seeking respite from the hustle and bustle of everyday life. We understand that life can get overwhelming, and sometimes all you need is a place to unwind, reflect, and rejuvenate."

    const p3 = document.createElement('p')
    p3.innerText = "Our carefully curated menu reflects our commitment to providing wholesome, thoughtfully prepared dishes that not only tantalize your taste buds but also promote well-being. We source fresh, local ingredients whenever possible, ensuring that every bite is a testament to our dedication to quality."

    const p4 = document.createElement('p')
    p4.innerText = "But Anxiety Cafe is more than just a place to enjoy a meal; it's a community hub. We host regular events, workshops, and gatherings aimed at fostering connection and supporting mental health. Our team is passionate about creating an inclusive environment where everyone feels welcome and valued."

    const p5 = document.createElement('p')
    p5.innerText = "Whether you're here for a quiet moment of solitude with a book and a cup of our specialty tea, or you're joining us for a lively conversation over a plate of our signature dishes, know that you're a cherished part of the Anxiety Cafe family."

    const p6 = document.createElement('p')
    p6.innerText = "Thank you for being here. We can't wait to serve you."

    const p7 = document.createElement('p')
    p7.innerText = "With warmth and gratitude,"

    const span3 = document.createElement('span')
    span3.innerText = "Asish"
   
    const span4 = document.createElement('span')
    span4.innerText = "Founder, Anxiety Cafe"

    textArea.append(span, p1, p2, p3, p4, p5, p6, p7, span3, span4)
    textArea.appendChild(textBody)
}

// about.addEventListener('click', populatingA)