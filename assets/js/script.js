let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}


document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

document.querySelector('#theme').onclick = () => {
    document.querySelector('#theme').classList.toggle('active');
}

/*Swiper Slide Script starts*/
var swiper = new Swiper(".home-slider", {
    spaceBetween: 200,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,

});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 300,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: { slidesPerView: 1, },
        640: { slidesPerView: 2, },
        768: { slidesPerView: 2, },
        1024: { slidesPerView: 3, }
    }

});
/*Swiper Slide Script ends*/

/*Theme color change script starts*/
const root = document.querySelector(':root');
const rootStyle = getComputedStyle(root);
document.querySelector('#theme-original').onclick = () => {
    root.style.setProperty('--primary', '#27ae60');
    root.style.setProperty('--secondary', '#192a56');
}
document.querySelector('#theme-purple').onclick = () => {
    root.style.setProperty('--primary', '#673ab7');
    root.style.setProperty('--secondary', '#607d8b');
}
document.querySelector('#theme-reddish').onclick = () => {
    root.style.setProperty('--primary', '#d50000');
    root.style.setProperty('--secondary', '#424242');
}
document.querySelector('#theme-blueish').onclick = () => {
    root.style.setProperty('--primary', '#1565c0');
    root.style.setProperty('--secondary', '#3e2723');
}
document.querySelector('#theme-yellow').onclick = () => {
    root.style.setProperty('--primary', '#ffc400');
    root.style.setProperty('--secondary', '#607d8b');
}
/*Theme color change script ends*/


/*Dropdown scripts starts */
const dropbtn = document.querySelector('#dropbtn')
const myDropdown = document.querySelector('#myDropdown')

dropbtn.onclick = () => {
    myDropdown.classList.toggle('show')
}

/*Dropdown scripts ends */

/*Loader scripts starts */
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 1000);
}

window.onload = fadeOut;
/*Loader scripts ends */