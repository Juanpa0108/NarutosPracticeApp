import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NarutoServiceService } from '../../services';

@Component({
  selector: 'app-info-personal-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-personal-page.component.html',
  styleUrl: './info-personal-page.component.css'
})
export class InfoPersonalPageComponent implements OnInit {
  

  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  public narutoService = inject(NarutoServiceService);


  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({id}) => this.narutoService.buscarPorId(id) )
  }


}
