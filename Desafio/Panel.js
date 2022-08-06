
let pressInicio = false;
let id = 0;

let arrayEnvases = [];

function botonInicio(){
    
    alert("Buenos Dias, "+this.getNombre() + "  ha presionado boton inicio ingrese sus envases..");
    
    const envase001 = new Envase("Botella", "750 ml", 50, "Vidrio", 50.5);

}
function ImprimirRecibo();{
    alert("Datos del Recibo "+"\n" +
    "Datos del Recibo "+"\n" +
    "Datos del Cliente"+"\n" +
    "ID  "+cliente001.getId() +"\n" +
    "Nombre  "+cliente001.getNombre());

    alert("Datos del/ de los envases: ")+ "\n";
    

} 

function continua(){
    let confirm = prompt("Desea continuar ingresando envases? (si/no)");
    
    if(confirm == "si"){

        alert("Escaneando envase..");
        pressInicio = true; 
    }   
    else{
        alert("Proceso cancelado...");
        pressInicio = false;
    }
}


const envase002 = new Envase("Lata", "750 ml", 50, "Metal", 50.5);
envase002.mostrarDatos();
const envase003 = new Envase("Botella", "750 ml", 50, "Plastico", 50.5);
envase003.mostrarDatos();





id++;
const cliente001 = new Cliente();
cliente001.setId(id);
let nombre = prompt("Ingrese su nombre");
cliente001.setNombre(nombre);
let apellido = prompt("Ingrese su Apellido");
cliente001.setApellido(apellido);
botonInicio();
arrayEnvases.push(envase001);
while(pressInicio){
    continua();

}