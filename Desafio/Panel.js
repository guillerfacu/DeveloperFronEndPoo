const Cliente = require('./Cliente');
const Envase = require('./Cliente');
const Recibo = require('./Recibo');

const envase002 = new Envase("Lata", "750 ml", 50, "Metal", 50.5);
envase002.mostrarDatos();
const envase003 = new Envase("Botella", "750 ml", 50, "Plastico", 50.5);
envase003.mostrarDatos();

