import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';

@Component({
  selector: 'app-emargement-liste',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent],
  templateUrl: './emargement-liste.component.html',
  styleUrl: './emargement-liste.component.css'
})
export class EmargementListeComponent {

}
