import { Component, OnInit } from '@angular/core';
import { VendehumosService } from '../../services/vendehumos.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listaVendehumos: any = [];
  constructor(private vhS: VendehumosService) { }

  ngOnInit(): void {
    this.getVendehumos();
  }
  getVendehumos(){
    this.vhS.getVendehumos()
    .subscribe((v: any) => {
      console.log(v)
      this.listaVendehumos = v;
      console.log(this.listaVendehumos);
    });
  }

}
