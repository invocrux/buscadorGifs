import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  constructor(private gifsService: ServicesService) { }
  
  get resultados(){
    return this.gifsService.resultados;
  }
  ngOnInit(): void {
  }

}
