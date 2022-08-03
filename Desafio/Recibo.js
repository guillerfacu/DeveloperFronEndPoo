class Recibo{
    constructor(TipoElem, valor, valorTotal, cantidad, totalDiario){
        this.TipoElem = TipoElem;
        this.valor = valor;
        this.valorTotal = valorTotal;
        this.cantidad = cantidad;
        this.totalDiario = totalDiario;
    }


    getTipoElem(){
        return this.TipoElem;
    }
    getValorr(){
        return this.valor;
    }
    getValorTotal(){
        return this.valorTotal;
    }
    getcantidad(){
        return this.cantidad;
    }
    getTotalDiario(){
        return this.totalDiario;
    }
    ImprimirRecibo(){

        console.log("Datos del Recibo");
        console.log("Tipo Elemento: "+this.getTipoElem());
        console.log("Valor: "+this.getValorr());
        console.log("Valor Total: "+this.getValorTotal());
        console.log("Cantidad Cliente: "+this.getcantidad());
        console.log("Total Diario "+this.getTotalDiario());
        console.log("Puede seguir ingresando envases, o presione IMPRIMIR para poder imprimir se recibo.");
    }
}