import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  
  nombreGasto:string;
  cantidad:number;
  formulario: boolean;
  textIncorrecto:string;
  constructor(private presupuestoService:PresupuestoService) { 
    this.nombreGasto='',
    this.cantidad=0,
    this.formulario=false,
    this.textIncorrecto=''
  }

  ngOnInit(): void {
  }
   
  agregarGasto(){

    if (this.cantidad>this.presupuestoService.restante){
      this.formulario=true;
      this.textIncorrecto='Cantidad ingresada es mayor al restante';
      return;
    }


    if(this.nombreGasto==='' || this.cantidad<=0){
      this.formulario=true;
      this.textIncorrecto='Nombre gasto o cantidad incorrecta';
    }else{
      //Objeto
      const GASTO = {
        nombre:this.nombreGasto,
        cantidad:this.cantidad
      }
      //Enviamos el objeto a los suscriptore via subjet
      this.presupuestoService.agregarGastoo(GASTO);

      this.formulario=false;
      this.nombreGasto='';
      this.cantidad=0;
    }
  }
}
