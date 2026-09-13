// Galeria de obras de Laurie Anderson
const obras = [
    {
        archivo: "img/heartofadog.jpg",
        nombre: "Heart of a Dog",
        anio: 2015,
    },
    {
        archivo: "img/habeascorpus.jpeg",
        nombre: "Habeas Corpus",
        anio: 1985,
    },
    {
        archivo: "img/osuperman.jpg",
        nombre: "O Superman",
        anio: 1981,
    },
    {
        archivo: "img/moon.jpg",
        nombre: "The End of the Moon",
        anio: 2002,
    },
    { 
         archivo: "img/united-states.jpg",
         nombre: "United States I-IV",
         anio: 1983,
    }
];

// Seleccion de los elementos del HTML
const obra = document.querySelector(".obra");
const botonSiguiente = document.querySelector(".siguiente-obra");

// Muestra la primera obra
let numero = 0;

function mostrarObra() {
    obra.innerHTML = `
        <img src="${obras[numero].archivo}" alt="${obras[numero].nombre}">
        <h3>${obras[numero].nombre}</h3>
        <p>Año: ${obras[numero].anio}</p>
    `;
}

mostrarObra();

// Cambia a la siguiente obra
botonSiguiente.addEventListener("click", function() {
    numero++;

    if (numero >= obras.length) {
        numero = 0; // Vuelve a la primera obra si se llega al final
    }

    mostrarObra();
});

