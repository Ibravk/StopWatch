let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBTN = document.getElementById("stop");
let startBtn = document.getElementById("start");

let heure = 0; 
let seconde = 0; 
let minute = 0; 

let chronoarret = true

let time; 


const demarrer = () => {
    if (chronoarret) {
        chronoarret = false
        avancerTemps()
    }
}; 


const arreter = () => {
    if (!chronoarret) {
        chronoarret = true
    }   clearTimeout(time) 
    //clearTimeout est une fonction utilisée pour annuler l'exécution d'un délai (time) 
};



const avancerTemps = () => {
    if (chronoarret) return

    seconde++; 

    if (seconde == 60) {
        minute++; 
        seconde = 0; 
    }

    if (minute == 60) {
        heure++; 
        minute = 0; 
    }

    chrono.textContent = `${heure}:${minute}:${seconde}`

    time = setTimeout(avancerTemps, 1000); 
    //setTimeout est utilisé pour exécuter une fonction après un certain délai spécifié.
};



const reset = () => {
    chronoarret = true
    chrono.textContent = "00:00:00"
    heure = 0 
    minute = 0
    seconde = 0
    clearTimeout(time)
}; 

startBtn.addEventListener("click", demarrer)
stopBTN.addEventListener("click", arreter)
resetBtn.addEventListener("click", reset)



/* Ce que j'ai appris : 
- script sur Html => Js
- les fonctions fléchées 
- les conditions 
- clearTimeout; setTimeout.
- getElementById = pour aller prendre un élément html
- addEventListener = méthode; pour attacher un gestionnaire d'événements à un élément HTML


Encore à Améliorer : 
- l'affichage de mon chrono; comprendre la logique de l'affichage j'aimerai avoir ex : 00:01:04 et non 0:1:4
- concaténer des string en Int ??
- organiser mon code(le rendre plus propre), 



A travailler : 
- convertir les secondes  ?
- le style de ma page (CSS)
- faire des recherches sur une autre façon de faire
- utiliser setInterval(), clearInterval() pour la version suivante


Niveau de difficulté ressenti = 8,5/10   le 28/03/2024
Niveay de Difficulté pour Aaron = 3/10
*/
