// DECLARACIÓN

// 01
const Coche = {
    marca: 'Marca',
    modelo: 'Modelo',
    matricula: 'Matrícula'
}

// 02
const Casa = {
    codPostal: '00000',
    calle: 'Calle',
    portal: '00',
    piso: '03'
}

// 03
const FullStackDeveloper = {
    lenguajes: ['español', 'euskera', 'inglés'],
    proyectos: ['proyecto01', 'proyecto02', 'proyecto03']
}

// 04
const Perro = {
    nombre: 'Paco',
    raza: 'Callejero',
    color: 'Gris',
    edad: 13,
    ladrar: function () {
        return console.log('Guauu')
    },
    popo: function () {
        return Math.random() * 3
    }
}

// PROPIEDADES

// 05
/* const Portatil = {
    marca: 'Dell'
}
*/
const marcaPortatil = Portatil.marca;
// console.log(Portatil.marca);

// // 06
const marcaPortatil2 = Portatil["marca"];

// 07
/*
const Concierto = {
    grupos: ['Grupo1', 'Grupo2']
}
*/
let grupos = Concierto["grupos"];

// 08
/*
const Led = {
    rojo: '',
    verde: '',
    azul: ''
}
*/
// let RGB = [rojo, verde, azul];
RGB = [Led.rojo, Led.verde, Led.azul];


// MODIFICACIÓN DE PROPIEDADES

// 09
Portatil.modelo = 'P345';

// 10
let grupo = "Guns N' Roses";
Concierto.cartelera.push(grupo);

// 11
Concierto.fecha = new Date();

// 12
Impresora.imprimiendo = objeto = {
    'nombreArchivo': '',
    'copias': '',
    'numPaginas': ''
}

// DECLARACIÓN

// 13
const Noticia = {
    titular: 'Titular',
    cuerpo: 'Cuerpo'
}

// 14
const Persona = {
    nombre: 'Nombre',
    apellidos: 'Apellidos',
    edad: ''
}

// 15
const Avion = {
    numPasajeros: '',
    despegar: function () {
        return console.log('despegando');
    },
    volar: function () {
        return console.log('llegando al destino');
    },
    aterrizar: function () {
        return console.log('aterrizando');
    }
}

// 16
const Paquete = {
    contenido: []
}

// 17
const Pais = {
    numHabitantes: '',
    continente: '',
    gentilicio: ''
}

// LECTURA DE PROPIEDADES

// 18
let codError = O_Error.codigo;

// 19
let integrantes = Grupo.integrantes;

// 20
let nivelesTinta = Impresora.tinta;

// 21
let pixeles = Pantalla.pixeles;

// 22
let especificaciones = Movil["especificaciones"];

// MODIFICACIÓN DE PROPIEDADES

// 23
Grupo.numIntegrantes = 5;

// 24
Pantalla.dimensiones = "1920x1080";

// 25
Led.encendido = (false != true || false);

// 26
Movil.temperatura = "20º";