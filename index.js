const listNav = document.querySelector('#navbarSupportedContent');
const items = document.querySelectorAll('.nav-link');


console.log(items)


items.forEach(item => {
    item.addEventListener('click', () => {
        listNav.classList.toggle('show')
    })
})