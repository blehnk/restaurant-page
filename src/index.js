import './style.css'
//import Img from '../assets/img.jpg'
import './initial.js'
import './about.js'
import './menu.js'


import { populatingA } from './about.js'
import { populatingM } from './menu.js'
import { about, menu, btn } from './initial.js'

menu.addEventListener('click', () => {
    btn.nextElementSibling.remove()
    populatingM()
})

about.addEventListener('click', () => {
    btn.nextElementSibling.remove()
    populatingA()
})