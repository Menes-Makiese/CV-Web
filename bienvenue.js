const boutons = document.querySelectorAll(".affichage_button");
const contenus = document.querySelectorAll(".contenu");
boutons.forEach(function (bouton, index) {
    bouton.addEventListener("click", function () {
        contenus.forEach(function (contenu) {
            contenu.style.display = "none";
        });
        contenus[index].style.display = "block";
        contenus[index].scrollIntoView({ behavior: 'smooth' });
    });
});
const htmlBtn = document.getElementById('htmlBtn');
const cssBtn = document.getElementById('cssBtn');
const javascriptBtn = document.getElementById('javascriptBtn');
const githubBtn = document.getElementById('githubBtn');

const htmlProgress = document.getElementById('htmlProgress');
const cssProgress = document.getElementById('cssProgress');
const javascriptProgress = document.getElementById('javascriptProgress');
const githubProgress = document.getElementById('githubProgress');

const communicationBtn = document.getElementById('communicationBtn');
const autonomieBtn = document.getElementById('autonomieBtn');
const creativiteBtn = document.getElementById('creativiteBtn');
const motivationBtn = document.getElementById('motivationBtn');

const communicationProgress = document.getElementById('communicationProgress');
const autonomieProgress = document.getElementById('autonomieProgress');
const creativiteProgress = document.getElementById('creativiteProgress');
const motivationProgress = document.getElementById('motivationProgress');

// Fonction pour remplir la barre de progression progressivement
function fillProgressBar(progressBar, targetPercentage) {
    let currentPercentage = 0;
    const interval = 10;

    const fill = () => {
        if (currentPercentage >= targetPercentage) {
            clearInterval(progressInterval);
        } else {
            currentPercentage++;
            progressBar.style.width = currentPercentage + '%';
        }
    };
    const progressInterval = setInterval(fill, interval);
}

// un gestionnaire d'événements "click" pour chaque bouton
htmlBtn.addEventListener('click', () => {
    fillProgressBar(htmlProgress, 100);
});

cssBtn.addEventListener('click', () => {
    fillProgressBar(cssProgress, 80);
});

javascriptBtn.addEventListener('click', () => {
    fillProgressBar(javascriptProgress, 60);
});

githubBtn.addEventListener('click', () => {
    fillProgressBar(githubProgress, 85);
});

communicationBtn.addEventListener('click', () =>{
    fillProgressBar(communicationProgress, 100);
});

autonomieBtn.addEventListener('click', () =>{
    fillProgressBar(autonomieProgress, 90);
});

creativiteBtn.addEventListener('click', () =>{
    fillProgressBar(creativiteProgress, 80);
});

motivationBtn.addEventListener('click', () =>{
    fillProgressBar(motivationProgress, 111);
});

document.addEventListener("scroll", function () {
    // Récupère la section actuelle
    const currentSection = getCurrentSection();

    // Applique la couleur de fond du header
    document.querySelector('header').style.backgroundColor = getComputedStyle(currentSection).backgroundColor;
});

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

$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.down').offset().top }, 'slow');
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
