const albumes = [
    {
        id: 1,
        titulo: "Morphine - Have a lucky day",
        caratula: "../images/Caratula1.png",
        descripcion: "Morphine de Have a Lucky Day es una canción con un ritmo hipnotizante y letras introspectivas que te sumergen en una atmósfera melancólica y adictiva.",
        cancion: "audio/cancion1.mp3",
    },
    {
        id: 2,
        titulo: "Herencia de timbiquí - Sabrás",
        caratula: " ../images/Caratula2.png",
        descripcion: "Herencia de Timbiquí es una reconocida agrupación musical colombiana que fusiona ritmos afrocolombianos, como el currulao y la marimba, con elementos modernos. Su música transmite alegría, tradición y energía contagiosa.",
        cancion: "audio/cancion2.mp3",
    },
    {
        id: 3,
        titulo: "Trío Matamoros - Lágrias negras",
        caratula: "../images/Caratula3.png",
        descripcion: "El Trío Matamoros es una destacada agrupación musical cubana. Lágrimas negras es un clásico de su repertorio, una emotiva canción que expresa el dolor y la tristeza causados por un amor perdido. Su interpretación cautiva con su melodía y letras nostálgicas.",
        cancion: "audio/cancion3.mp3",
    },
    {
        id: 4,
        titulo: "Erikah Badu - On & On",
        caratula: "../images/Caratula4.png",
        descripcion: "Erykah Badu es un icónico tema de neo soul que captura la esencia del estilo y la personalidad de la artista. Con su voz seductora y letras introspectivas, Badu invita a sumergirse en un viaje musical y reflexivo.",
        cancion: "audio/cancion4.mp3",
    },
    {
        id: 5,
        titulo: "Johnny Hallyday - Marie",
        caratula: "../images/Caratula5.png",
        descripcion: " Con su voz poderosa y emotiva, Hallyday expresa la pasión y el deseo por su amada Marie. La canción evoca una mezcla de romanticismo y nostalgia, dejando una huella en el corazón de los fanáticos.",
        cancion: "audio/cancion5.mp3",
    },
    {
        id: 6,
        titulo: "Bob Dylan - Saved",
        caratula: "../images/Caratula6.png",
        descripcion: "Con una fusión de rock y gospel, Dylan explora su fe y el concepto de salvación. La canción transmite una energía espiritual y presenta letras poderosas que reflejan la evolución artística y personal de Dylan en ese momento de su carrera.",
        cancion: "audio/cancion6.mp3",
    },
    {
        id: 7,
        titulo: "Big Brother & The Holding Company - Piece of My Heart",
        caratula: "../images/Caratula7.png",
        descripcion: "Es una canción icónica de rock que presenta la poderosa voz de Janis Joplin. Con su intensidad y emoción desgarradora, transmite el anhelo y el sufrimiento profundo de un amor que se ha desvanecido.",
        cancion: "audio/cancion7.mp3",
    },
    {
        id: 8,
        titulo: "Esne Beltza - Esnesaltzailearena ",
        caratula: "../images/Caratula8.png",
        descripcion: "Es una canción enérgica y festiva que combina elementos del rock, ska y música tradicional vasca. Con su ritmo contagioso y letras enérgicas, invita a bailar y celebrar la diversidad cultural con un espíritu de fiesta.",
        cancion: "audio/cancion8.mp3",
    },
    {
        id: 9,
        titulo: "Melendi - Un violinista en tu tejado",
        caratula: "../images/Caratula9.png",
        descripcion: "Es una canción romántica que narra la historia de un amor clandestino y apasionado. Con su estilo pop-rock y letras poéticas, Melendi evoca la emoción y la intensidad de un romance prohibido, destacando la belleza de los momentos fugaces y secretos.",
        cancion: "audio/cancion9.mp3",
    },
    {
        id: 10,
        titulo: "Creedence Clearwater Revival - Have You Ever Seen The Rain",
        caratula: "../images/Caratula10.png",
        descripcion: "Con su melodía pegadiza y letras introspectivas, la canción reflexiona sobre la ilusión y la desilusión en la vida, mientras la lluvia simboliza los desafíos y obstáculos que enfrentamos. Es un himno nostálgico que resuena con oyentes de todas las generaciones.",
        cancion: "audio/cancion10.mp3",
    },
];


// Creación de las tarjetas 


const mainHero = document.querySelector(".hero-reserva");

// albumes.length

for (let i = 0; i< 1 ; i++) {
    let card = document.createElement("article");
    card.className = "card"+ i;
    card.classList.add("art-cancion");
    mainHero.appendChild(card);

    let titulo = document.createElement("h3");
    titulo.className = "titulo" + i;
    titulo.textContent = albumes[i].titulo;
    titulo.classList.add("cancion-title");
    card.appendChild(titulo);

    let container = document.createElement("div");
    container.className = "container" + i;
    container.classList.add("cancion-con");
    card.appendChild(container);

    let texto =document.createElement("p");
    texto.className = "texto" + i;
    texto.textContent = albumes[i].descripcion;
    texto.classList.add("cancion-des");
    container.appendChild(texto);

    let imagen = document.createElement("img");
    imagen.className= "imagen" + i;
    imagen.src = albumes[i].caratula;
    imagen.classList.add("cancion-img");
    container.appendChild(imagen);

    console.log(card.className);
}




