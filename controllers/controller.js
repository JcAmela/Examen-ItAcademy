"use strict";
var camara;
var letrasRegex = /^[A-Za-z]+$/;
var numerosRegex = /^[0-9]+$/;
function submitCamara() {
    var errores = 0;
    var nombreInput = document.getElementById("nombreInput");
    var direccionInput = document.getElementById("direccionInput");
    var precioMaxInput = document.getElementById("precioMaxInput");
    nombreInput.classList.remove('is-valid', 'is-invalid');
    direccionInput.classList.remove('is-valid', 'is-invalid');
    precioMaxInput.classList.remove('is-valid', 'is-invalid');
    if (!letrasRegex.test(nombreInput.value) || nombreInput.value.length < 3) {
        errores++;
        nombreInput.classList.add('is-invalid');
    }
    else {
        nombreInput.classList.add('is-valid');
    }
    if (!letrasRegex.test(direccionInput.value) || direccionInput.value.length < 3) {
        errores++;
        direccionInput.classList.add('is-invalid');
    }
    else {
        direccionInput.classList.add('is-valid');
    }
    if (!numerosRegex.test(precioMaxInput.value) || precioMaxInput.value.length < 3) {
        errores++;
        precioMaxInput.classList.add('is-invalid');
    }
    else {
        precioMaxInput.classList.add('is-valid');
    }
    if (errores > 0) {
        console.log('Error. Rellena bien los campos con un mínimo de 3 caracteres. Asegúrate de ingresar letras en los campos "nombre" y "dirección", y números en el campo "precio máximo". <Por cierto... si eres mi profesor me merezco un 10!! son las 23:07h de la noche >.<....> (XDDD, es coña, bueno... no es coña, nose (o.O), tú mismo :D)');
    }
    else {
        camara = new Camara(nombreInput.value, Number(precioMaxInput.value), direccionInput.value);
        showVehicle();
        showequipoForm();
    }
}
function showVehicle() {
    var camaraTitle = document.getElementById("camaraTitle");
    var nombreOutput = document.getElementById("nombreOutput");
    var direccionOutput = document.getElementById("direccionOutput");
    var precioMaxOutput = document.getElementById("precioMaxOutput");
    camaraTitle.innerText = "Camara:";
    nombreOutput.innerText = "nombre: " + camara.nombre;
    direccionOutput.innerText = "direccion: " + camara.direccion;
    precioMaxOutput.innerText = "precioMax: " + camara.precioMax;
}
function submitequipoForm() {
    var errores = 0;
    for (var i = 1; i <= 4; i++) {
        var volumenEnfriadorEquipo = document.getElementById("volumenEnfriador" + i);
        var frigoriasEnfriadorEquipo = document.getElementById("frigoriasEnfriador" + i);
        var precioEnfriadorEquipo = document.getElementById("precioEnfriador" + i);
        volumenEnfriadorEquipo.classList.remove('is-valid', 'is-invalid');
        frigoriasEnfriadorEquipo.classList.remove('is-valid', 'is-invalid');
        precioEnfriadorEquipo.classList.remove('is-valid', 'is-invalid');
        if (!numerosRegex.test(volumenEnfriadorEquipo.value) || volumenEnfriadorEquipo.value.length < 3) {
            errores++;
            volumenEnfriadorEquipo.classList.add('is-invalid');
        }
        else {
            volumenEnfriadorEquipo.classList.add('is-valid');
        }
        if (!letrasRegex.test(frigoriasEnfriadorEquipo.value) || frigoriasEnfriadorEquipo.value.length < 3) {
            errores++;
            frigoriasEnfriadorEquipo.classList.add('is-invalid');
        }
        else {
            frigoriasEnfriadorEquipo.classList.add('is-valid');
        }
        if (!numerosRegex.test(precioEnfriadorEquipo.value) || precioEnfriadorEquipo.value.length < 3) {
            errores++;
            precioEnfriadorEquipo.classList.add('is-invalid');
        }
        else {
            var precioEnfriador = Number(precioEnfriadorEquipo.value);
            var nuevoTotal = camara.totalPrecioEquipos + precioEnfriador;
            if (nuevoTotal > camara.precioMax) {
                errores++;
                precioEnfriadorEquipo.classList.add('is-invalid');
                console.log('Error: la adición de este equipo superaría el precio máximo permitido.');
            }
            else {
                precioEnfriadorEquipo.classList.add('is-valid');
                var equipo_generica = new Equipo(Number(volumenEnfriadorEquipo.value), String(frigoriasEnfriadorEquipo.value), precioEnfriador);
                camara.addEquipo(equipo_generica);
            }
        }
    }
    if (errores > 0) {
        console.log('Error. Rellena bien los campos con un mínimo de 3 caracteres. Asegúrate de ingresar letras en el campo "Frigorias del enfriador", y números en los campos "Volumen del enfriador" y "Precio del enfriador". Además, el total del precio de los equipos no debe superar el precio máximo. <Parte 2, si eres mi profesor me merezco un "12<plus!!>" son las 0:23h de la noche >.<....> (Aumentando mi delirio * 99999mil de hype porque ya he acabado!! Bnaniitt :D)');
    }
    else {
        console.log(camara);
        showequipos();
    }
}
function showequipos() {
    var equipoTitle = document.getElementById("equipoTitle");
    var equipoOutput1 = document.getElementById("equipoOutput1");
    var equipoOutput2 = document.getElementById("equipoOutput2");
    var equipoOutput3 = document.getElementById("equipoOutput3");
    var equipoOutput4 = document.getElementById("equipoOutput4");
    equipoTitle.innerHTML = "equipos:";
    equipoOutput1.innerHTML = "<b>Enfriadora 1:</b><br>  " + "volumen: " + camara.equipos[0].volumenEnfriador + "  <br>Frigorias: " + camara.equipos[0].frigoriasEnfriador + "  <br>precio: " + camara.equipos[0].precioEnfriador;
    equipoOutput2.innerHTML = "<b>Enfriadora 2:</b><br>  " + "volumen: " + camara.equipos[1].volumenEnfriador + "  <br>Frigorias: " + camara.equipos[1].frigoriasEnfriador + "  <br>precio: " + camara.equipos[1].precioEnfriador;
    equipoOutput3.innerHTML = "<b>Enfriadora 3:</b><br>  " + "volumen: " + camara.equipos[2].volumenEnfriador + "  <br>Frigorias: " + camara.equipos[2].frigoriasEnfriador + "  <br>precio: " + camara.equipos[2].precioEnfriador;
    equipoOutput4.innerHTML = "<b>Enfriadora 4:</b><br>  " + "volumen: " + camara.equipos[3].volumenEnfriador + "  <br>Frigorias: " + camara.equipos[3].frigoriasEnfriador + "  <br>precio: " + camara.equipos[3].precioEnfriador;
}
function showequipoForm() {
    var camaraForm = document.getElementById("create-camara-form");
    var camaraEquipo = document.getElementById("create-equipo-form");
    camaraForm.style.display = "none";
    camaraEquipo.style.display = "block";
}
