
const btnSiguiente = document.querySelector(".btn-reserva");
const tabla = document.querySelectorAll(".table-col");
const hora = document.querySelector(".hora");


btnSiguiente.addEventListener("click", () => {
    window.location.href = "cancion.html";
});

//función para coger el día
let dia;
let mes= "junio";
let anyo= "2023";
let fecha=[];

for (let i = 0; i < tabla.length; i++) {
    tabla[i].addEventListener("click", (e) => {
        dia = e.target.textContent;
        
    });
};

//función para coger la hora
let horario;
hora.addEventListener("change", (e)=>{

    horario= e.target.value;

    fecha.push({ fecha:dia + " "+ mes + " " + anyo + " " + horario}); 

    localStorage.setItem("Reserva", JSON.stringify(fecha));
});