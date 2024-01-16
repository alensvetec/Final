/* Scroll header */
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* Active link */
const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive)

/* Scroll up button */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Dark theme */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-lightbulb-fill'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-lightbulb-line' : 'ri-lightbulb-fill'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-lightbulb-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/* Reveal */
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2500,
})

sr.reveal('.home__data, .contact__container, .footer__container, .footer__info, .about__container')
sr.reveal('.home__images',{delay: 300, origin: 'bottom'})
sr.reveal('.products__card',{interval: 100})

/* Burger menu*/
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger__menu');
    const navLinks = document.querySelector('.nav__menu');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});