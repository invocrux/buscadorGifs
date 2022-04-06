import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifspageComponent } from './gifspage/gifspage.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GifspageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    GifspageComponent,
    BusquedaComponent,
    ResultadosComponent
  ]
})
export class GifsModule { }
