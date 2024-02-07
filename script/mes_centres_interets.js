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

const modal = document.querySelectorAll(".myModal");


const img = document.querySelectorAll(".myImg");
const modalImg = document.querySelectorAll(".modal-content");

for (let i = 0; i < img.length; i++) {

    img[i].addEventListener('click', function () {
        modal[i].style.display = "block";
        modalImg[i].src = this.src;
    })

    let span = document.querySelectorAll(".close");
    span[i].addEventListener('click', function () {
        modal[i].style.display = "none";
    })

    modal[i].addEventListener('click', function () {
        modal[i].style.display = "none";
    })
}