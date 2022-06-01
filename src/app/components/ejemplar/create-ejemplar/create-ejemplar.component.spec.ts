import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEjemplarComponent } from './create-ejemplar.component';

describe('CreateEjemplarComponent', () => {
  let component: CreateEjemplarComponent;
  let fixture: ComponentFixture<CreateEjemplarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEjemplarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEjemplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
