import { PLATFORM_ID, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieService } from '../services/serie.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})


export class StatsComponent {
  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  serieService = inject(SerieService);
  series = computed(() => this.serieService.seriesSignal());
  vues = computed(() => this.serieService.seriesVues());

  total = computed(() => this.series().length);
  totalVues = computed(() => this.series().filter(s => this.vues().includes(s.id)).length);
  moyenneNote = computed(() => {
    const notes = this.series().map(s => s.note);
    return notes.length ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : '0';
  });

  genres = computed(() => {
    const map = new Map<string, number>();
    this.series().forEach(s => {
      map.set(s.genre, (map.get(s.genre) || 0) + 1);
    });
    return Array.from(map.entries());
  });

  pieChartData = computed<ChartConfiguration<'pie'>['data']>(() => {
    const labels = this.genres().map(([genre]) => genre);
    const data = this.genres().map(([, count]) => count);
    return {
      labels,
      datasets: [{ data }]
    };
  });

  pieChartType: ChartType = 'pie';
}
