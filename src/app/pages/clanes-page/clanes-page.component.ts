import { AfterViewInit, Component, inject } from '@angular/core';
import { ClanesServiceService } from '../../services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clanes-page',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './clanes-page.component.html',
  styleUrl: './clanes-page.component.css'
})
export class ClanesPageComponent implements AfterViewInit {

  public servicioClanes = inject(ClanesServiceService);

  ngAfterViewInit(): void {
    this.servicioClanes.obtenerClanes();
  }






}
