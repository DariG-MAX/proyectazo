export default class Cl_mbodega{
    constructor(){
        this.mIb10=5;
        this.mIb20=2;
        this.mIb50=10;
        this.mFT=0;
    }
    procesarCliente(cliente){
        if(cliente.denominacion == 10){
            this.mIb10 =+ cliente.cantidad;
        }
        if(cliente.denominacion == 20){
            this.mIb20 =+ cliente.cantidad;
        }
        if(cliente.denominacion == 50){
            this.mIb50 =+ cliente.cantidad;
        }
        this.mFT += cliente.calcMont();
    }
    calcMontFi(){
        return this.mFT;
    }
}
