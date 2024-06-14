import { Router } from './router.js'

document.querySelector('nav').firstElementChild.classList.add('selected')

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

document.querySelector('nav').addEventListener('click', event => {
    const links = document.querySelectorAll('nav a')

    links.forEach(link => link.classList.remove('selected'))
    event.target.classList.add('selected')

    const body = document.querySelector('body');

    switch (window.location.pathname) {
        case '/universe':
            body.style.backgroundImage = "url('./assets/background-2.png')";
            break;
        case '/contact':
            body.style.backgroundImage = "url('./assets/background-3.png')";
            break;
        default:
            body.style.backgroundImage = "url('./assets/background-1.png')";
            break;
    }
})