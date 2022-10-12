/* **Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
**MILESTONE 1**
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
**MILESTONE 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
**MILESTONE 3**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
**BONUS 1:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
**BONUS 2:**
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva. */


const albumImages = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];

// Elementi HTML
const itemsContainer = document.querySelector(".items-container");
const miniItemsContainer = document.querySelector(".mini-items-container");

const up = document.querySelector(".up");
const down = document.querySelector(".down");

const miniImage = document.querySelectorAll(".card");
console.log(miniImage);

// Ciclo per creare gli elementi
for (let i = 0; i < albumImages.length; i++) {
    const element = `<div class="item">
    <img src="img/0${i + 1}.jpg" alt="" />
  </div>`

    console.log(element);
    itemsContainer.innerHTML += element;
    console.log(itemsContainer);

    const miniElement = `          <div class="card">
    <img src="img/0${i + 1}.jpg" alt="" />
  </div>`
    
    miniItemsContainer.innerHTML += miniElement;
}

// Settare condizione iniziale
const items = document.getElementsByClassName("item");
let sliderImage = 0;
items[sliderImage].classList.add("active");

const miniItems = document.getElementsByClassName("card");
miniItems[sliderImage].classList.add("active-border");

// down.classList.add("hidden");

// Salire nello slider
up.addEventListener("click", function() {
    if (sliderImage < (albumImages.length - 1)){

        // Nascondo la prima immagine
        items[sliderImage].classList.remove("active");

        // nascondo effetto hover prima immagine
        miniItems[sliderImage].classList.remove("active-border");

        // Incremento il contatore
        sliderImage++;

        // Mostro l'immagine successiva
        items[sliderImage].classList.add("active");

        // Mostro hover sull'elemento successivo
        miniItems[sliderImage].classList.add("active-border");


    } else {
        // Nascondo la prima immagine
        items[sliderImage].classList.remove("active");

        // Nascondo hover sulla prima immagine
        miniItems[sliderImage].classList.remove("active-border");

        // Riparto da zero
        sliderImage = 0;

        // Mostro l'immagine successiva
        items[sliderImage].classList.add("active");

        // Mostro hover sull'elemento successivo
        miniItems[sliderImage].classList.add("active-border");
    }
       
});

// Scendere nello slider
down.addEventListener("click", function() {
    if (sliderImage > 0 ){

        // Nascondo la prima immagine
        items[sliderImage].classList.remove("active");

        // Nascondo hover sulla prima immagine
        miniItems[sliderImage].classList.remove("active-border");

        // Decremento il contatore
        sliderImage--;

        // Mostro l'immagine successiva
        items[sliderImage].classList.add("active");

        // Mostro hover sull'elemento successivo
        miniItems[sliderImage].classList.add("active-border");


    } else {
        // Nascondo la prima immagine
        items[sliderImage].classList.remove("active");

        // Nascondo hover sulla prima immagine
        miniItems[sliderImage].classList.remove("active-border");

        // Riparto da zero
        sliderImage = (albumImages.length - 1);

        // Mostro l'immagine successiva
        items[sliderImage].classList.add("active");

        // Mostro hover sull'elemento successivo
        miniItems[sliderImage].classList.add("active-border");
    }
});