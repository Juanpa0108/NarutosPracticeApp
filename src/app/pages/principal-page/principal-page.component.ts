import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { NarutoServiceService } from '../../services';
import { Character } from '../../interfaces';

@Component({
  selector: 'app-principal-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.css'
})
export class PrincipalPageComponent implements AfterViewInit {

  public servicioNaruto = inject(NarutoServiceService); 
  public pagina:number = 1;
  public personajesProhibidos:string[] = ['Ishikawa', 'Nonō Yakushi','Komushi', 'Hiruko (missing-nin)', 'Chen', 'Matatabi', 'Taizō', 'Mito Uzumaki'  ];
  

  ngAfterViewInit(): void {
    this.servicioNaruto.ObtenerTodosPersonajes(this.pagina);
  }

  derecha():void{
    this.pagina = this.pagina+1;
    this.servicioNaruto.ObtenerTodosPersonajes(this.pagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  izquierda():void{
    this.pagina = this.pagina-1;
    this.servicioNaruto.ObtenerTodosPersonajes(this.pagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
