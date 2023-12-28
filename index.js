const listNav = document.querySelector('#navbarSupportedContent');
const items = document.querySelectorAll('.nav-link');


items.forEach(item => {
    item.addEventListener('click', () => {
        listNav.classList.toggle('show')
    })
})