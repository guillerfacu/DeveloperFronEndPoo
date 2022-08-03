const persona1 ={
    nombre : 'Homero',
    edad :  39,
    calle : 'Av, SiempreViva 742'

}

/* tipo json */
/* console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.calle); */
 
/* otra clase */

const persona2 ={
    nombre : 'Bart',
    edad :  10,
    calle : 'Av, SiempreViva 742'

}

/*------------------ Constructor------------- */
/* 
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){ console.log("Hola Soy "+ this.nombre)}
}
const persona3 = new Persona("Homero", 39, "Av. SiempreViva 742");
const persona4 = new Persona("Bart", 10, "Av. SiempreViva 742");


console.log(persona3.nombre);
console.log(persona3.edad);
console.log(persona3.calle);
persona3.hablar(); */

class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    hablar(){
        console.log("Hola soy "+ this.nombre)
    }
    
}
const persona6 = new Persona ("Bart", 13,"Av. Siempreviva 742");
for (const i in persona6){
    console.log(persona6[i]);

}
persona6.hablar();


