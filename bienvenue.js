const boutons = document.querySelectorAll(".affichage_button");
const contenus = document.querySelectorAll(".contenu") ;
boutons.forEach(function(bouton,index){
    bouton.addEventListener("click", function(){
        contenus.forEach(function(contenu){
            contenu.style.display="none";});
            contenus[index].style.display="block";
            contenus[index].scrollIntoView({behavior:'smooth'});
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
        fillProgressBar(githubProgress, 80);
    });

    document.addEventListener("scroll", function() {
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
    
    // Close navigation when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", closeNav);
    });
    
    function closeNav() {
      hamburgerButton.classList.remove("active");
      navigation.classList.remove("active");
    }

