import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSerieComponent } from './ajout-serie.component';

describe('AjoutSerieComponent', () => {
  let component: AjoutSerieComponent;
  let fixture: ComponentFixture<AjoutSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutSerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
