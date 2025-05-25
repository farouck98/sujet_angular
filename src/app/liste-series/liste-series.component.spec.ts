import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSeriesComponent } from './liste-series.component';

describe('ListeSeriesComponent', () => {
  let component: ListeSeriesComponent;
  let fixture: ComponentFixture<ListeSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
