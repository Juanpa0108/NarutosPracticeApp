import { AfterViewInit, Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { KkgServiceService } from '../../services';
import { Kekkeigenkai } from '../../interfaces';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-kekkei-genkai-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './kekkei-genkai-page.component.html',
  styleUrl: './kekkei-genkai-page.component.css'
})
export class KekkeiGenkaiPageComponent implements AfterViewInit {

  serviciokkG = inject(KkgServiceService);
  ngAfterViewInit(): void {
    this.serviciokkG.obtenerKekkeiGenkai();
  }

}
