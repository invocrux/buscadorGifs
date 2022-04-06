import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {
  
  buscar: string = '';
  
  mostrar(){
    if(this.buscar === ''){
      return;
    }else{
      this.gifsService.agregarGifs(this.buscar);
      this.buscar=''; 
    }
     
  }
  
  constructor(private gifsService: ServicesService) {
   }

  ngOnInit(): void {
  }

}
