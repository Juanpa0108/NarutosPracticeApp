import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, map } from 'rxjs';
import { AllCharacters, Character } from '../interfaces';
import { environment } from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class NarutoServiceService {

  private http = inject(HttpClient)

  constructor() { }

  

  private url:string = `${environment.baseUrl}/character`;

  private personajes = signal<Character[]|undefined>(undefined);

  private personajePorId = signal<Character|undefined>(undefined);

  public personajesComputados = computed(() => this.personajes());

  private personajesBusqueda = signal<Character|undefined>(undefined);

  public personajesBuscadosComputados = computed(() => this.personajesBusqueda());

  public personajePorIdComputado = computed(()=> this.personajePorId());

  public ObtenerTodosPersonajes(page:number):Subscription{
    
   return this.http.get<AllCharacters>(`${this.url}?page=${page}&limit=40`)
            .pipe(
              map(res => res.characters),
              map(res => this.personajes.set(res))
            ).subscribe()

  }

  public buscarPersonaje(nombre:string){
    if(!nombre)this.personajesBusqueda.set(undefined);
    
    
    this.http.get<Character>(`${this.url}/search?name=${nombre}`)
    .pipe(
      map( res => this.personajesBusqueda.set(res))
    )
    .subscribe();
  }

  public buscarPorId(id:number){

    return this.http.get<Character>(`${this.url}/${id}`)
    .pipe(
      map(res => this.personajePorId.set(res))
    ).subscribe(() => console.log(this.personajePorIdComputado()))

  }

}
