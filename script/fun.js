const btnReserva = document.querySelector(".reserva-des");

if (btnReserva) {
    btnReserva.addEventListener("click", () => {

        location.href = "../pages/reserva.html"
    });
}


const btnPlay = document.querySelector(".botn-play");
const cancion = new Audio("audio/cancion1.mp3");


btnPlay.addEventListener("click", ()=>{

    cancion.play();

});



