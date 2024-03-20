import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { NarutoServiceService } from '../../services';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  private debouncTimer?: NodeJS.Timeout;
  public NarutoService = inject(NarutoServiceService);

buscarPersonaje(valor:string){

  if(this.debouncTimer) clearTimeout(this.debouncTimer);
  this.debouncTimer = setTimeout(() => {
    this.NarutoService.buscarPersonaje(valor);
  }, 500)
}

limpieza(input:HTMLInputElement){

  input.value='';
  this.NarutoService.buscarPersonaje(input.value);

}



}
