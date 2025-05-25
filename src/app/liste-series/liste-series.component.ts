import { Component, computed, inject, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSerieComponent } from '../card-serie/card-serie.component';
import { SerieService } from '../services/serie.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-series',
  standalone: true,
  imports: [
    CommonModule,
    CardSerieComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatOptionModule,
    FormsModule
  ],
  templateUrl: './liste-series.component.html',
  styleUrls: ['./liste-series.component.scss']
})
export class ListeSeriesComponent {
  private serieService = inject(SerieService);

  allSeries = computed(() => this.serieService.seriesSignal());

  genreFiltre = signal<string>('Tous');
  noteMinFiltre = signal<number>(0);

  genresDisponibles = computed(() => {
    const genres = new Set(this.allSeries().map(s => s.genre));
    return ['Tous', ...Array.from(genres)];
  });

  series = computed(() => {
    return this.allSeries().filter(serie => {
      console.log('note:', serie.note, 'type:', typeof serie.note);
      
      const genreOK = this.genreFiltre() === 'Tous' || serie.genre === this.genreFiltre();
      const noteOK = Number(serie.note) >= this.noteMinFiltre();
      return genreOK && noteOK;
    });
    
  });

  resetFiltres() {
  this.genreFiltre.set('Tous');
  this.noteMinFiltre.set(0);
  }
}
