import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy  {
  subscription:Subscription;
  presupuesto:number=0;
  restante:number=0;
  listGasto:any[]=[];

  constructor(private presupuestoService: PresupuestoService) {
    this.subscription=this.presupuestoService.getGastos().subscribe(data=>{
      this.restante=this.restante - data.cantidad;
      this.listGasto.push(data);
    })
   }

  ngOnInit(): void {
    this.presupuesto=this.presupuestoService.presupuesto;
    this.restante=this.presupuestoService.restante;
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  aplicarcolorRestante(){
    if(this.presupuesto/4>this.restante){
      return 'alert alert-danger';
    }else if(this.presupuesto/2>this.restante){
      return 'alert alert-warning';
    }else{
      return 'alert alert-secondary';
    }
  }

}
