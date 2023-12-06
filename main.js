const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
            
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// loop per far mettere card dntro html

posts.forEach((elementi)=>{
    const {id,content,media,author,likes,created}=elementi
    const {name,image}=author
   const card =  `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${image}" alt="${name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author"${name}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
   `;

    document.getElementById("container").innerHTML+=card;
})


// messi tutti classi dentro un array
let button=document.getElementsByClassName("js-like-button");

// console.log(button);

let textButton=document.getElementsByClassName("js-likes-counter")
console.log(textButton);

// ciclo per classi dentro all'array button
for (let i = 0; i < posts.length; i++) {
    // elementi dentro all'array post
   let oggeti = posts[i]

    // array di stesse classi per cambiare il colore del bottone
   let elementi = button[i]

    // array di piu classi con lo stesso nome per cambiare il n likes
    let textChange=textButton[i];

    // funzione con dentro i cambiamenti
    eleSpecifico(elementi,oggeti,textChange);

};

// funzione per dare la classe all'elemento specifico
function eleSpecifico(items ,ogg,text) {
    
    // evento per aggiungere caratteristiche al bottone mi piace 
    items.addEventListener("click",function (Event) {
        // evita che torni sempre alla pagina
        Event.preventDefault()
        // funzione cambio numero di likes
        like(ogg,text)

        return items.classList.add("like-button--liked")
    })
}


// funzione per cambiare il numero di likes
function like(nOggetto, nLikes) {
    let {likes}=nOggetto
    likes++
         
     return nLikes.innerHTML=likes
 }
