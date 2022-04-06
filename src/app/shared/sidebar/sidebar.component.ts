import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/gifs/services/services.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  

  get historial(){
   return this.gifsService.obtenerGifs;
  }
  
  buscar(item: string){
    this.gifsService.agregarGifs(item);
    console.log(item);
  }

  constructor(private gifsService: ServicesService) { }

  

}
