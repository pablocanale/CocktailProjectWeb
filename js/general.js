


function toggleMenu() {
    let nav = document.querySelector('nav')
    let ul = nav.getElementsByTagName('ul');
    for (let i = 0; i < ul.length; ++i)
        ul[i].classList.toggle("show");
}
