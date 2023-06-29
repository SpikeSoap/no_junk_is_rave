const btnVolver = document.querySelector(".btn-volver");
const btnRegistrar = document.querySelector("#btn-registro");
const btnCondiciones = document.querySelector("#condi-uso");


let usuariosRegis =[];

//volver a la página de inicio
btnVolver.addEventListener("click", ()=>{
    window.location.href="../index.html";
});


//Guardar los datos del nuevo usuario registrado
btnRegistrar.addEventListener("click", ()=>{ 

    let vCorreo = document.registrar.iCorreo.value;
    let vContra = document.registrar.iPass.value;
    let vNombre = document.registrar.iNombre.value;

    if (vCorreo.trim() != "" && vContra.trim() != "" && vNombre.trim() != "" && btnCondiciones.checked == true) {
        usuariosRegis.push({ correo: vCorreo, contrasena: vContra, nombre: vNombre, });

        localStorage.setItem("My array", JSON.stringify(usuariosRegis));

        var guardado = localStorage.getItem('My array');
        console.log('Valor obtenido: ', JSON.parse(guardado)); 


        fechaRegistro();

    } else if(btnCondiciones.checked == false){

        alert("Debe aceptar las condiciones de uso");
    }

    else {
        alert("Introduzca todos los campos");
    }

});

//Mostrar fecha y día del usuario registrado


function fechaRegistro(){
    let fecha = new Date();
    let diaSemana = obtenerDiaSemana(fecha.getDay());

    var fechaRegistro = "Hoy es " + diaSemana + ", " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    
    alert("Se ha registrado en la siguiente fecha: " + fechaRegistro);
         location.href = "../index.html";
}

function obtenerDiaSemana(dia) {
    var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return diasSemana[dia];
}

