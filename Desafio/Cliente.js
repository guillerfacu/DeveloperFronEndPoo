class Cliente{
    constructor(id, nombre, apellido){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }


    getId(){
        return this.id;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }

    botonInicio(){
        console.log("Buenos Dias, "+this.getNombre() + "  ha presionado boton inicio ingrese sus envases..");
    }
    botonImprimit(){
        console.log("Ha presionado imprimir, Imprimiendo su tiket...");
    }
    mostrarDatos(){
        console.log("Datos del cliente");
        console.log("ID: "+this.getId());
        console.log("Nombre: "+this.getNombre());
        console.log("Apellido: "+this.getApellido());
        
    }

}