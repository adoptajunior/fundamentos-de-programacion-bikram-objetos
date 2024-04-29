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