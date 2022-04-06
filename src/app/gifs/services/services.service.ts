import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponsive } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  private apiKey: string = '5PYwRE6nNccRmoFDBKAvVwTRX3EnaWw0';
  private gifs: string[] = [];

  public resultados: Gif[] = [];

  get obtenerGifs(){
    this.gifs = this.gifs.splice(0,10);//para decirle que solo queremos los 10 primeros elementos
    return [...this.gifs];// los tres puntos es para que no nos modifiquen los datos
  }

  constructor(private http: HttpClient){

    this.gifs = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  agregarGifs(argument: string){

    argument = argument.trim().toLocaleLowerCase();// trim es para tener quitar espacios

    if (!this.gifs.includes(argument)){ //includes sirve para que haya datos repetidos?
      this.gifs.unshift(argument);
    }
    // http son observable y permite añadirle funciones - modulo propio de angular
    
    this.http.get<SearchGifsResponsive>(`https://api.giphy.com/v1/gifs/search?api_key=5PYwRE6nNccRmoFDBKAvVwTRX3EnaWw0&q=${argument}`)
    .subscribe( (resp) => {
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados)); 
    });
    
    localStorage.setItem('historial', JSON.stringify(this.gifs));   
    
  }



  
}
