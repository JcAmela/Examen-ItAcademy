let camara: Camara

let letrasRegex = /^[A-Za-z]+$/;
let numerosRegex = /^[0-9]+$/;
let direccionRegex = /^[a-zA-Z0-9 ]*$/;


function submitCamara() {
    let errores = 0;
    let nombreInput = <HTMLInputElement>document.getElementById("nombreInput");
    let direccionInput = <HTMLInputElement>document.getElementById("direccionInput");
    let precioMaxInput = <HTMLInputElement>document.getElementById("precioMaxInput");
    

    nombreInput.classList.remove('is-valid', 'is-invalid');
    direccionInput.classList.remove('is-valid', 'is-invalid');
    precioMaxInput.classList.remove('is-valid', 'is-invalid');


    if (!letrasRegex.test(nombreInput.value) || nombreInput.value.length < 3) {
        errores++;
            nombreInput.classList.add('is-invalid');
    }else{
        nombreInput.classList.add('is-valid');
    }

    if (!direccionRegex.test(direccionInput.value) || direccionInput.value.length < 3) {
        errores++;
        direccionInput.classList.add('is-invalid');
    }else{
        direccionInput.classList.add('is-valid');
    }

    if (!numerosRegex.test(precioMaxInput.value)|| precioMaxInput.value.length < 3 ) {
        errores++;
        precioMaxInput.classList.add('is-invalid');
    }else{
        precioMaxInput.classList.add('is-valid');
    }


    if (errores > 0) {
        console.log('Error. Rellena bien los campos con un mínimo de 3 caracteres. Asegúrate de ingresar letras en los campos "nombre" y "dirección", y números en el campo "precio máximo"')
    } else {
        camara = new Camara(nombreInput.value, Number(precioMaxInput.value), direccionInput.value);
        showVehicle();
        showequipoForm();
    }
}

function showVehicle() {
    let camaraTitle = <HTMLInputElement>document.getElementById("camaraTitle");
    let nombreOutput = <HTMLInputElement>document.getElementById("nombreOutput");
    let direccionOutput = <HTMLInputElement>document.getElementById("direccionOutput");
    let precioMaxOutput = <HTMLInputElement>document.getElementById("precioMaxOutput");

    camaraTitle.innerText = "Camara:";
    nombreOutput.innerText = "nombre: " + camara.nombre;
    direccionOutput.innerText = "direccion: " + camara.direccion;
    precioMaxOutput.innerText = "precioMax: " + camara.precioMax;

}

function submitequipoForm() {
    let errores = 0;

    for (let i = 1; i <= 4; i++) {
        let volumenEnfriadorEquipo = <HTMLInputElement>document.getElementById("volumenEnfriador" + i);
        let frigoriasEnfriadorEquipo = <HTMLInputElement>document.getElementById("frigoriasEnfriador" + i);
        let precioEnfriadorEquipo = <HTMLInputElement>document.getElementById("precioEnfriador" + i);

        volumenEnfriadorEquipo.classList.remove('is-valid', 'is-invalid');
        frigoriasEnfriadorEquipo.classList.remove('is-valid', 'is-invalid');
        precioEnfriadorEquipo.classList.remove('is-valid', 'is-invalid');

        if (!numerosRegex.test(volumenEnfriadorEquipo.value) || volumenEnfriadorEquipo.value.length < 3) {
            errores++;
            volumenEnfriadorEquipo.classList.add('is-invalid');
        } else {
            volumenEnfriadorEquipo.classList.add('is-valid');
        }

        if (!letrasRegex.test(frigoriasEnfriadorEquipo.value) || frigoriasEnfriadorEquipo.value.length < 3) {
            errores++;
            frigoriasEnfriadorEquipo.classList.add('is-invalid');
        } else {
            frigoriasEnfriadorEquipo.classList.add('is-valid');
        }

        if (!numerosRegex.test(precioEnfriadorEquipo.value) || precioEnfriadorEquipo.value.length < 3) {
            errores++;
            precioEnfriadorEquipo.classList.add('is-invalid');
        } else {
            let precioEnfriador = Number(precioEnfriadorEquipo.value);
            let nuevoTotal = camara.totalPrecioEquipos + precioEnfriador;

            if (nuevoTotal > camara.precioMax) {
                errores++;
                precioEnfriadorEquipo.classList.add('is-invalid');
                console.log('Error: la adición de este equipo superaría el precio máximo permitido.');
            } else {
                precioEnfriadorEquipo.classList.add('is-valid');
                let equipo_generica = new Equipo(Number(volumenEnfriadorEquipo.value), String(frigoriasEnfriadorEquipo.value), precioEnfriador);
                camara.addEquipo(equipo_generica);
            }
        }
    }

    if (errores > 0) {
        console.log('Error. Rellena bien los campos con un mínimo de 3 caracteres. Asegúrate de ingresar letras en el campo "Frigorias del enfriador", y números en los campos "Volumen del enfriador" y "Precio del enfriador". Además, el total del precio de los equipos no debe superar el precio máximo');
    } else {
        console.log(camara);
        showequipos();
    }
}


function showequipos() {
    let equipoTitle = <HTMLInputElement>document.getElementById("equipoTitle");
    let equipoOutput1 = <HTMLInputElement>document.getElementById("equipoOutput1");
    let equipoOutput2 = <HTMLInputElement>document.getElementById("equipoOutput2");
    let equipoOutput3 = <HTMLInputElement>document.getElementById("equipoOutput3");
    let equipoOutput4 = <HTMLInputElement>document.getElementById("equipoOutput4");

    equipoTitle.innerHTML = "equipos:";
    equipoOutput1.innerHTML = "<b>Enfriadora 1:</b><br>  " + "volumen: " + camara.equipos[0].volumenEnfriador + "  <br>Frigorias: " + camara.equipos[0].frigoriasEnfriador + "  <br>precio: " + camara.equipos[0].precioEnfriador;
    equipoOutput2.innerHTML = "<b>Enfriadora 2:</b><br>  " + "volumen: " + camara.equipos[1].volumenEnfriador + "  <br>Frigorias: " + camara.equipos[1].frigoriasEnfriador + "  <br>precio: " + camara.equipos[1].precioEnfriador;
    equipoOutput3.innerHTML = "<b>Enfriadora 3:</b><br>  " + "volumen: " + camara.equipos[2].volumenEnfriador + "  <br>Frigorias: " + camara.equipos[2].frigoriasEnfriador + "  <br>precio: " + camara.equipos[2].precioEnfriador;
    equipoOutput4.innerHTML = "<b>Enfriadora 4:</b><br>  " + "volumen: " + camara.equipos[3].volumenEnfriador + "  <br>Frigorias: " + camara.equipos[3].frigoriasEnfriador + "  <br>precio: " + camara.equipos[3].precioEnfriador;
}


function showequipoForm() {
    let camaraForm = <HTMLInputElement>document.getElementById("create-camara-form");
    let camaraEquipo = <HTMLInputElement>document.getElementById("create-equipo-form");
    camaraForm.style.display = "none";
    camaraEquipo.style.display = "block";

} 