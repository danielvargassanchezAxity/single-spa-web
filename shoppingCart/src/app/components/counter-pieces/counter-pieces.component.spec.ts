import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPiecesComponent } from './counter-pieces.component';
import { FormsModule } from '@angular/forms';

describe('CounterPiecesComponent', () => {
  let component: CounterPiecesComponent;
  let fixture: ComponentFixture<CounterPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterPiecesComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
