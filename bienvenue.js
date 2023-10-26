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
