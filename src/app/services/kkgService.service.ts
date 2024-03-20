import { Injectable, computed, inject, signal } from '@angular/core';
import { Kekkeigenkai } from '../interfaces';
import { KekkeiGenkaiResponse } from '../interfaces/kekkeiGenkaiCharacters';
import { Subscription, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class KkgServiceService {

  private http = inject(HttpClient);


  private urlkkG:string = `${environment.baseUrl}/kekkei-genkai?`;
  private kkgPersonajes = signal<Kekkeigenkai[]|undefined>(undefined);
  public kkgComputados = computed( () => this.kkgPersonajes());

  public obtenerKekkeiGenkai():Subscription{

    return this.http.get<KekkeiGenkaiResponse>(`${this.urlkkG}page=1&limit=39`)
    .pipe(
      map( res => res.kekkeigenkai),
      map( res => this.kkgPersonajes.set(res))
    ).subscribe()
  }

}
