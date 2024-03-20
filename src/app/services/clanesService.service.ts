import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../environments/environments';

import { Subscription, map } from 'rxjs';
import { AllClanes, Clan } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClanesServiceService {

  private http = inject(HttpClient);

  private clanes:string = `${environment.baseUrl}/clan?limit=58`;
  private clanesSignal = signal<Clan[]|undefined>(undefined);
  public clanesComputed = computed(() => this.clanesSignal());

  public obtenerClanes():Subscription{
      return this.http.get<AllClanes>(this.clanes)
      .pipe(
        map( res => res.clans),
        map( res => this.clanesSignal.set(res))
      )
      .subscribe()
  }

}
