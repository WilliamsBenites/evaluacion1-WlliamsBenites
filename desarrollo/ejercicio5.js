const personajes = [
    {
        "id": 1,
        "name": "Goku",
        "race": "Saiyan",
        "attack": 50000,
        "defense": 50000,
        "abilities": [
        "Transformaciones de Super Saiyan",
        "Super Kamehameha",
        "Super Dragon Fist"
        ] 
    },
    {
        "id":2,
        "name": "Vegeta",
        "race": "Saiyan",
        "attack": 49000,
        "defense": 49000,
        "abilities": [
        "Super Saiyan Transformations",
        "Final Flash",
        "Big Bang Attack"
        ]
    },
    {
        "id": 3,
        "name": "Gohan",
        "race": "Humano/Saiyan",
        "attack": 38000,
        "defense": 38000,
        "abilities": [
        "Super Saiyan Transformations",
        "Super Kamehameha",
        "Masenko"
        ]
    },
    
    {
        "id": 4,
        "name": "Freezer",
        "race": "Unknown",
        "attack": 47000,
        "defense": 47000,
        "abilities": [
        "Eye Laser",
        "Death Beam",
        "Death Ball"
        ]
    },
    {
        "id": 5,
        "name": "Cell",
        "race": "Android",
        "attack": 20000,
        "defense": 20000,
        "abilities": [
        "Energy Shield",
        "Super Kamehameha",
        "Destructo Disk"
        ]
    },
    {
        "id": 6,
        "name": "Buu",
        "race": "Majin",
        "attack": 29000,
        "defense": 29000,
        "abilities": [
        "Absorption",
        "Healing",
        "Chocolate Beam"
        ]
    }
]

function AttackAlto (personajes) {
    let mayorAttack = personajes[0];

    for  (let i = 1; i < personajes.length; i++){
        if(personajes[i].attack > mayorAttack.attack){
            mayorAttack = personajes[1];
        }
    }

    return mayorAttack;
}

let mayorAttack = AttackAlto (personajes);
console.log (mayorAttack);



function encontraralSaiyans(personajes) {
    let saiyans = []; 

   
    for (let i = 0; i < personajes.length; i++) {
        if (personajes[i].race === "Saiyan") {
            saiyans.push(personajes[i]); 
        }
    }

    return saiyans;
}

console.log (encontraralSaiyans(personajes));


function sumadePoder (personajes){
    let totalAttack = 0;

    
    for (let i = 0; i < personajes.length; i++) {
        totalAttack += personajes[i].attack;
    }

    return totalAttack;
}

let totaldepoder = sumadePoder(personajes);
console.log(totaldepoder);


function obtenerNombres(personajes) {
    let nombres = []; 

  
    for (let i = 0; i < personajes.length; i++) {
        nombres.push(personajes[i].name); 
    }

    return nombres; 
}
let nombresdelosPersonajes = obtenerNombres (personajes);
console.log(nombresdelosPersonajes);