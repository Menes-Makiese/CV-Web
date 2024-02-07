const boutons = document.querySelectorAll(".affichage_button");
function getCurrentSection() {
    // Récupère toutes les sections de la page
    const sections = document.querySelectorAll('section');

    // Trouve la première section qui est partiellement visible
    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            return section;
        }
    }

    // Si aucune section n'est partiellement visible, retourne la première section
    return sections[0];
}


document.addEventListener("scroll", function () {
    // Récupère la section actuelle
    const currentSection = getCurrentSection();

});



const hamburgerButton = document.querySelector(".nav_toggler");
const navigation = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
}

// Ferme la boite de navigation lors du clique sur un lien
navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
});

function closeNav() {
    hamburgerButton.classList.remove("active");
    navigation.classList.remove("active");
}

$(function () {
    $('.scroll-down').click(function () {
        $('html, body').animate({ scrollTop: $('.down').offset().top }, 'slow');
        return false;
    });
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
