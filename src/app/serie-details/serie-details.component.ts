import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../services/serie.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-serie-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.scss']
})
export class SerieDetailsComponent {
  private route = inject(ActivatedRoute);
  private serieService = inject(SerieService);

  serieId = Number(this.route.snapshot.paramMap.get('id'));
  serie = this.serieService.seriesSignal().find(s => s.id === this.serieId);

  estVue = this.serieService.estVue(this.serieId);

  marquerVue() {
    this.serieService.marquerCommeVue(this.serieId);
    this.estVue = true;
  }
}
