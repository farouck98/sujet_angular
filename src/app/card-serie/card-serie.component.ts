import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SerieService } from '../services/serie.service';
import { computed, inject } from '@angular/core';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-serie',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './card-serie.component.html',
  styleUrls: ['./card-serie.component.scss']
})
export class CardSerieComponent {
  @Input() serie: any;
  isTruncated: boolean = true;

  private serieService = inject(SerieService);
  estVue = computed(() => this.serieService.estVue(this.serie.id));

  toggleSynopsis(): void {
    this.isTruncated = !this.isTruncated;
  }

  marquerVue(): void {
    this.serieService.marquerCommeVue(this.serie.id);
  }
}
