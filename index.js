let Coche = {
marca : "asd",
modelo : 2,
matricula : "as44",
}

let Casa = {
    codPostal : 1,
    calle : "we",
    portal : 2,
    piso : "weew"
}

let FullStackDeveloper = {
    lenguajes : [],
    proyectos : [],
}

let Perro = {
    nombre : "",
    raza : "ogro",
    color : "",
    edad : 2,
    ladrar() {
        console.log("ladrido");
        
    },

    popo(){
return (Math.random()*3);
    }

}

//console.log(Perro.raza);



let marcaPortatil = Portatil.marca;
//console.log(Portatil.marca);

let marcaPortatil2 = Portatil["marca"];
//console.log(Portatil["marca"])
//console.log(Portatil);
//console.log(marcaPortatil2);

let grupos = Concierto.grupos;

//console.log(Casa);

let RGB = [Led.rojo, Led.verde, Led.azul];

//

Portatil.modelo = "P345";
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
Impresora.imprimiendo = {
    nombreArchivo : "",
    copias : "",
    numPaginas : "",
}

let Noticia = {
    titular : "",
    cuerpo : ""
}

let Persona = {
    nombre : "",
    apellidos : "",
    edad : ""
}

let Avion = {
    numPasajeros : "",
    despegar(){
        console.log("despegando");
    },
    volar(){
        console.log("llegando al destino");
    },
    aterrizar(){
        console.log("aterrizando");
    }
}

let Paquete = {
    contenido : ["","",""]
}
 
let Pais = {
    numHabitantes : "",
    continente : "",
    gentilicio : ""
}

let codError = O_Error.codigo;

let integrantes = Grupo.integrantes;

let nivelesTinta = Impresora.tinta;

let pixeles = Pantalla.pixeles;

let especificaciones = Movil["especificaciones"];

Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";
Led.encendido = !Led.encendido;
Movil.temperatura = "20º";
