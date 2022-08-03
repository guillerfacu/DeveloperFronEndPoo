


const cliente001 = new Cliente (2,"Matias", "Suarez");
cliente001.botonInicio();

const envase001 = new Envase("Botella", "750 ml", 50, "Vidrio", 50.5);
envase001.mostrarDatos();
const envase002 = new Envase("Lata", "750 ml", 50, "Metal", 50.5);
envase002.mostrarDatos();
const envase003 = new Envase("Botella", "750 ml", 50, "Plastico", 50.5);
envase003.mostrarDatos();

const recibo001 = new Recibo(envase001.getTipo(),68, 32,32,32 );
recibo001.ImprimirRecibo();