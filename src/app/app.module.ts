import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { ServicesService } from './gifs/services/services.service';
import { BuscadorModule } from './shared/buscador.module';


@NgModule({
  declarations: [	
    AppComponent,  
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BuscadorModule,
    GifsModule,
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
