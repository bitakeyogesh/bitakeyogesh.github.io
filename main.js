window.onload = function () {
    Particles.init({
        selector: '.background',
        color: '#75A5B7',
        maxParticles: 130,
        connectParticles: true,
        responsive: [{
            breakpoint: 768,
            options: {
                maxParticles: 80
            }
        }, {
            breakpoint: 375,
            options: {
                maxParticles: 50
            }
        }]
    });
};

const navBarButton = document.querySelector('.navbar-toggler');
const navbarCollapseElement = document.querySelector('.navbar-collapse');
navBarButton.addEventListener('click', () => {
    navbarCollapseElement.classList.toggle("show");
});


const navLinks = document.getElementsByClassName('nav-link');
const sectionContainers = document.getElementsByClassName('section-container');
const canvas = document.getElementsByTagName('canvas')[0];
for (let link of navLinks) {
    link.addEventListener('click', (event) => {
        const activeNavItem = event.target.id;
        for (let link of navLinks) {
            link.classList.remove("activeLink");
        }
        link.classList.toggle("activeLink");
        if(activeNavItem === 'home'){
            canvas.classList.remove("invisible");
        }
        else {
            canvas.classList.add("invisible");
        }
        for (let container of sectionContainers) {
            container.classList.remove("active");
            if (container.className.includes(`${activeNavItem}-section`)) {
                container.classList.add("active");
            }
        }
        const isNavBarToggled = navbarCollapseElement.className.includes('show');
        if (isNavBarToggled) {
            navbarCollapseElement.classList.toggle("show");
        }
    })
}