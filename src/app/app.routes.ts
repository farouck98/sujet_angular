import { Routes } from '@angular/router';
import { ListeSeriesComponent } from './liste-series/liste-series.component';
import { AjoutSerieComponent } from './ajout-serie/ajout-serie.component';
import { StatsComponent } from './stats/stats.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';

export const routes: Routes = [
    { path: '', component: ListeSeriesComponent},
    { path: 'ajout', component: AjoutSerieComponent},
    { path: 'stats', component: StatsComponent},
    { path: 'series/:id', component: SerieDetailsComponent}
];
