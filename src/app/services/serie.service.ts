import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private vuesSignal = signal<number[]>([]); // liste des IDs des séries vues

  get seriesVues() {
    return this.vuesSignal.asReadonly();
  }

  marquerCommeVue(id: number): void {
    const vues = this.vuesSignal();
    if (!vues.includes(id)) {
      this.vuesSignal.set([...vues, id]);
    }
  }

  seriesSignal = signal<any[]>([
  // séries initiales ici
  ]);

  ajouterSerie(serie: any) {
  const seriesActuelles = this.seriesSignal();
  this.seriesSignal.set([...seriesActuelles, { id: Date.now(), ...serie }]);
  }

  estVue(id: number): boolean {
    return this.vuesSignal().includes(id);
  }
}
