import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeShoppingComponent } from './resume-shopping.component';

describe('ResumeShoppingComponent', () => {
  let component: ResumeShoppingComponent;
  let fixture: ComponentFixture<ResumeShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeShoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
