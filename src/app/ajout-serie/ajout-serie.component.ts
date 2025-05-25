import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SerieService } from '../services/serie.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ajout-serie',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule
  ],
  templateUrl: './ajout-serie.component.html',
  styleUrls: ['./ajout-serie.component.scss']
})
export class AjoutSerieComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  serieService = inject(SerieService);

  form: FormGroup = this.fb.group({
    titre: ['', Validators.required],
    annee: [2023, [Validators.required, Validators.min(1900)]],
    genre: ['', Validators.required],
    note: [3, [Validators.min(0), Validators.max(5)]],
    saisons: [1, [Validators.min(1)]],
    synopsis: ['', Validators.required]
  });

ajouterSerie() {
  if (this.form.valid) {
    const serieForm = this.form.value;

    this.serieService.ajouterSerie({
      ...serieForm,
      note: +serieForm.note,         // 🔁 convertit en number
      saisons: +serieForm.saisons,   // 🔁 convertit en number
      annee: +serieForm.annee        // 🔁 convertit en number (optionnel mais conseillé)
    });

    this.form.reset();

    Swal.fire({
      title: '✅ Série ajoutée !',
      text: 'Ta série a bien été enregistrée.',
      icon: 'success',
      confirmButtonText: 'Super !',
      confirmButtonColor: '#9c27b0',
      background: '#f9f1ff'
    }).then(() => {
      this.router.navigateByUrl('/');
    });
  }
}


mettreAJourNote(val: number): void {
  this.form.get('note')?.setValue(val);
}

get noteControl(): FormControl {
  return this.form.get('note') as FormControl;
}



}
