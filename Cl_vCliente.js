export default class Cl_vCliente{   
        constructor(controlador){
            this.vista = document.getElementById("clienteForm")
            this.intCedula = document.getElementById("clienteForm_inCedula")
            this.intDenominacion = document.getElementById("clienteForm_inDenominacion")
            this.intCantidad = document.getElementById("clienteForm_inCantidad")
            this.btAceptar = document.getElementById("clienteForm_btAceptar")
            this.btAceptar.onclick = () =>
                controlador.agregarCliente({
                    cedula: this.intCedula.value,
                    denominacion: this.intDenominacion.value,
                    cantidad: this.intCantidad.value,
                });
                this.ocultar();
        }
        mostrar() {
            this.vista.hidden = false;
        }
        ocultar() { 
            this.vista.hidden = true;
        }   
    }
