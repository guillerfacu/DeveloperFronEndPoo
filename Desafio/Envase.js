class Envase{
    constructor(tipo , capacidad, diametro, material, valorDevolucionXun){
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.diametro = diametro;
        this.material = material;
        this.valorDevolucionXun = valorDevolucionXun;
    }


    getTipo(){
        return this.tipo;
    }
    getCapacidad(){
        return this.capacidad;
    }
    getDiametro(){
        return this.diametro;
    }
    getMaterial(){
        return this.material;
    }
    getValor(){
        return this.valorDevolucionXun;
    }

    setTipo(nombre){
        this.tipo = nombre;
    }
    setCapacidad(nombre){
        this.capacidad = nombre;
    }
    setDiametro(nombre){
        this.diametro = nombre;
    }
    setTMaterial(nombre){
        this.material = nombre;
    }
    setValor(nombre){
        this.valorDevolucionXun = nombre;
    }
    mostrarDatos(){
        console.log("Datos del envase");
        console.log("Tipo: "+ this.getTipo());
        console.log("Capacidad: "+ this.getCapacidad());
        console.log("Diametro: "+ this.getDiametro());
        console.log("Material: "+ this.getMaterial());
        console.log("Valor: $ "+ this.getValor());
        console.log("--------------------------------------");
    }

}