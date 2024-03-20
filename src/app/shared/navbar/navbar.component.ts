import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { RouterModule } from '@angular/router';


type navbar = {
  nombre:string, 
  url:string
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SearchComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public divisionesNavbar = signal<navbar[]>([
    {nombre: 'Clanes', url: '/clanes'},
    {nombre: 'Kekkei Genkai', url: '/kekkeiGenkai'},

  ]);

  public computedDivisiones = computed(() => this.divisionesNavbar())


}
