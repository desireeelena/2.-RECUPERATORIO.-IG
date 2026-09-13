// Ejercicio 3: archivo musical
let cantidadObras = 0;
let obras = [];

// Capturo los elementos del DOM
let formCantidad = document.querySelector('#formCantidad');
let btnComenzar = document.querySelector('#btnComenzar');
let seccionObras = document.querySelector('#seccionObras');
let btnGuardarObra = document.querySelector('#btnGuardarObra');
let seccionRepositorio = document.querySelector('#seccionRepositorio');
let btnCalcular = document.querySelector('#btnCalcular');
let resultados = document.querySelector('#resultados');
let btnReiniciar = document.querySelector('#btnReiniciar');
let numeroObra = document.querySelector('#numeroObra');

// Defino evento para el botón de comenzar
btnComenzar.addEventListener('click', function(e) {
    // Uso preventDefault para que no se recargue la página
    e.preventDefault();
    ingresarCantidad();
});

// Defino función para ingresar la cantidad de obras
function ingresarCantidad() {

    // Capturo el valor que ingresó el usuario
    cantidadObras = document.querySelector('#cantidadObras').value;

    // Valido que no esté vacío y que sea un número
    if (cantidadObras == '' || isNaN(cantidadObras)) {
        alert('La cantidad de obras debe ser un número');
        return false;
    }

    // Valido que la cantidad sea mayor que cero
    if (cantidadObras <= 0) {
        alert('La cantidad de obras debe ser mayor que cero');
        return false;
    }

    // Convierto el valor a número
    cantidadObras = Number(cantidadObras);

    // Deshabilito la opción para volver a ingresar la cantidad
    document.querySelector('#cantidadObras').disabled = true;
    btnComenzar.disabled = true;

    // Muestro la sección para ingresar las obras
    seccionObras.hidden = false;

    // Muestro qué obra se está ingresando
    numeroObra.innerHTML = 'Obra 1 de ' + cantidadObras;
}

// Defino evento para el botón de guardar obra
btnGuardarObra.addEventListener('click', function(e) {
    // Uso preventDefault para que no se recargue la página
    e.preventDefault();
    ingresarObra();
});

// Defino función para ingresar los datos de cada obra
function ingresarObra() {

    // Capturo el nombre de la obra
    let nombreObra = document.querySelector('#nombreObra').value;

    // Valido que el nombre no esté vacío
    if (nombreObra == '') {
        alert('El nombre de la obra no puede estar vacío');
        return false;
    }

    // Capturo la duración de la obra
    let duracionObra = document.querySelector('#duracionObra').value;

    // Valido que la duración no esté vacía y que sea un número
    if (duracionObra == '' || isNaN(duracionObra)) {
        alert('La duración debe ser un número');
        return false;
    }

    // Valido que la duración sea mayor que cero
    if (duracionObra <= 0) {
        alert('La duración debe ser mayor que cero');
        return false;
    }

    // Capturo el peso del archivo
    let pesoObra = document.querySelector('#pesoObra').value;

    // Valido que el peso no esté vacío y que sea un número
    if (pesoObra == '' || isNaN(pesoObra)) {
        alert('El peso del archivo debe ser un número');
        return false;
    }

    // Valido que el peso sea mayor que cero
    if (pesoObra <= 0) {
        alert('El peso debe ser mayor que cero');
        return false;
    }

    // Creo un objeto con los datos de la obra
    let nuevaObra = {
        nombre: nombreObra,
        duracion: Number(duracionObra),
        peso: Number(pesoObra)
    };

    // Agrego el objeto al array
    obras.push(nuevaObra);

    alert('Obra ingresada correctamente');

    // Limpio los campos del formulario
    document.querySelector('#nombreObra').value = '';
    document.querySelector('#duracionObra').value = '';
    document.querySelector('#pesoObra').value = '';

    // Verifico si ya se ingresaron todas las obras
    verificarCantidadObras();
}

// Defino la función para verificar la cantidad de obras ingresadas
function verificarCantidadObras() {

    if (obras.length >= cantidadObras) {

        // Deshabilito la opción para seguir ingresando obras
        btnGuardarObra.disabled = true;

        // Oculto la sección de carga de obras
        seccionObras.hidden = true;

        // Muestro la sección para ingresar los datos del repositorio
        seccionRepositorio.hidden = false;

    } else {

        // Muestro el número de la próxima obra
        numeroObra.innerHTML = 'Obra ' + (obras.length + 1) + ' de ' + cantidadObras;
    }
}

// Defino evento para el botón de calcular
btnCalcular.addEventListener('click', function(e) {
    // Uso preventDefault para que no se recargue la página
    e.preventDefault();
    calcularResultados();
});

// Defino función para calcular los resultados
function calcularResultados() {

    // Capturo el tiempo de transferencia por MB
    let transferencia = document.querySelector('#transferencia').value;

    // Valido que no esté vacío y que sea un número
    if (transferencia == '' || isNaN(transferencia)) {
        alert('El tiempo de transferencia debe ser un número');
        return false;
    }

    // Valido que sea mayor que cero
    if (transferencia <= 0) {
        alert('El tiempo de transferencia debe ser mayor que cero');
        return false;
    }

    // Capturo el costo mensual por MB
    let costo = document.querySelector('#costo').value;

    // Valido que no esté vacío y que sea un número
    if (costo == '' || isNaN(costo)) {
        alert('El costo debe ser un número');
        return false;
    }

    // Valido que el costo no sea negativo
    if (costo < 0) {
        alert('El costo no puede ser negativo');
        return false;
    }

    // Convierto los valores a números
    transferencia = Number(transferencia);
    costo = Number(costo);

    // Declaro las variables para los cálculos
    let duracionTotal = 0;
    let pesoTotal = 0;
    let obraMayor = obras[0];

    // Recorro el array para realizar los cálculos
    for (let i = 0; i < obras.length; i++) {

        duracionTotal = duracionTotal + obras[i].duracion;
        pesoTotal = pesoTotal + obras[i].peso;

        if (obras[i].duracion > obraMayor.duracion) {
            obraMayor = obras[i];
        }
    }

    // Calculo la duración promedio
    let duracionPromedio = duracionTotal / obras.length;

    // Calculo el tiempo de transferencia de la obra de mayor duración
    let tiempoTransferencia = obraMayor.peso * transferencia;

    // Calculo el presupuesto necesario para un año
    let presupuestoAnual = pesoTotal * costo * 12;

    // Muestro los resultados
    document.querySelector('#duracionTotal').innerHTML =
        'Duración total: ' + duracionTotal + ' minutos';

    document.querySelector('#duracionPromedio').innerHTML =
        'Duración promedio: ' + duracionPromedio + ' minutos';

    document.querySelector('#obraMayor').innerHTML =
        'Obra de mayor duración: ' + obraMayor.nombre +
        ' (' + obraMayor.duracion + ' minutos)';

    document.querySelector('#transferenciaMayor').innerHTML =
        'Tiempo de transferencia: ' + tiempoTransferencia +
        ' milisegundos';

    document.querySelector('#presupuesto').innerHTML =
        'Presupuesto anual: $' + presupuestoAnual;

    // Oculto la sección del repositorio
    seccionRepositorio.hidden = true;

    // Muestro los resultados
    resultados.hidden = false;
}

// Defino evento para el botón de reiniciar
btnReiniciar.addEventListener('click', function() {
    reiniciar();
});

// Defino función para reiniciar el programa
function reiniciar() {

    // Vacío el array de obras
    obras = [];

    // Reinicio la cantidad de obras
    cantidadObras = 0;

    // Limpio los formularios
    formCantidad.reset();
    document.querySelector('#formObra').reset();
    document.querySelector('#formRepositorio').reset();

    // Vuelvo a habilitar la cantidad de obras
    document.querySelector('#cantidadObras').disabled = false;
    btnComenzar.disabled = false;
    btnGuardarObra.disabled = false;

    // Oculto las secciones
    seccionObras.hidden = true;
    seccionRepositorio.hidden = true;
    resultados.hidden = true;
}