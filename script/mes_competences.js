// Recuperation des boutons
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
    fillProgressBar(htmlProgress, 98);
});

cssBtn.addEventListener('click', () => {
    fillProgressBar(cssProgress, 80);
});

javascriptBtn.addEventListener('click', () => {
    fillProgressBar(javascriptProgress, 50);
});

githubBtn.addEventListener('click', () => {
    fillProgressBar(githubProgress, 85);
});

communicationBtn.addEventListener('click', () => {
    fillProgressBar(communicationProgress, 99);
});

autonomieBtn.addEventListener('click', () => {
    fillProgressBar(autonomieProgress, 85);
});

creativiteBtn.addEventListener('click', () => {
    fillProgressBar(creativiteProgress, 80);
});

motivationBtn.addEventListener('click', () => {
    fillProgressBar(motivationProgress, 130);
});