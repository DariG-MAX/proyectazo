import Cl_vBodega from "./Cl_vBodega.js";
import Cl_vCliente  from "./Cl_vCliente.js";
import Cl_mBodega from "./Cl_mBodega.js";
import Cl_mCliente from "./Cl_mCliente.js";
export default class Cl_controlador {
    constructor(){
        this.mBodega = new Cl_mBodega();
        this.vCliente = new Cl_vCliente(this);
        this.vBodega = new Cl_vBodega(this);
        this.mCliente = new Cl_mBodega(this);

    }
    mostrarVistaCliente(){
        this.vBodega.ocultar();
        this.vCliente.mostrar();
    }
    mostrarVistaBodega(){
        this.vCliente.ocultar();
        this.vBodega.mostrar();
    }
    agregarCliente({ cedula, denominacion, cantidad }) {
        let cliente = new Cl_mCliente ({cedula, denominacion, cantidad});
        this.mBodega.procesarCliente(cliente);
        this.vBodega.reportarCliente({
            cedula: cliente.cedula, 
            denominacion: cliente.denominacion,
            cantidad: cliente.cantidad,
            montT: cliente.calcMont(),
            mIB10: this.mBodega.mIb10,
            mIb20: this.mBodega.mIb20,
            mIb50: this.mBodega.mIb50,
            montF: this.mBodega.calcMontFi()
        });
        this.mostrarVistaBodega();
    }
}