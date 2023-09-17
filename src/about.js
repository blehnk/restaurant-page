import { about } from "./initial"

export function populatingA() {
    const textArea = document.createElement('div')
    textArea.classList.add("textArea")
    content.appendChild(textArea)

    const span = document.createElement('span') 
    span.innerText = "Welcome to Panic Perch Cafe!"
    const p1 = document.createElement('p')
    p1.innerText = "At Panic Perch Cafe, we're dedicated to providing an experience that will keep you on the edge of your seat. Nestled in a curious corner of [City/Town], we've designed an environment that challenges your senses and leaves you guessing at every turn."

    const p2 = document.createElement('p')
    p2.innerText = "From our disorienting décor to our menu designed to surprise and intrigue, every visit to Panic Perch is bound to keep your heart racing. Our culinary creations are crafted to defy expectations, taking you on a rollercoaster ride of flavor and texture."

    const p3 = document.createElement('p')
    p3.innerText = "Our team is specially trained to provide service that will keep you guessing. With unexpected twists and turns, you'll never know quite what to expect next. We've turned dining into an adventure, ensuring that every moment at Panic Perch is memorable."

    const p4 = document.createElement('p')
    p4.innerText = "Unpredictable Ambiance, Unforgettable Memories"

    const p5 = document.createElement('p')
    p5.innerText = "At Panic Perch Cafe, we've crafted an atmosphere that keeps you on your toes. Our ever-changing lighting and surreal installations create an environment that blurs the lines between reality and imagination. With each visit, you'll find yourself immersed in a world of surprises, making every moment at Panic Perch a story worth sharing. Whether you're here for the heart-pounding menu or the mind-bending decor, one thing is for sure - you won't leave unchanged."

    const p6 = document.createElement('p')
    p6.innerText = "So, if you're looking for an experience that will test your mettle and leave you talking for days, join us at Panic Perch Cafe. Just remember, it's not for the faint of heart."

    const p7 = document.createElement('p')
    p7.innerText = "Dare to take the plunge?"

    const span3 = document.createElement('span')
    span3.innerText = "blank\nFounder, Panic Perch Cafe"
   
    textArea.append(span, p1, p2, p3, p4, p5, p6, p7, span3)
}
