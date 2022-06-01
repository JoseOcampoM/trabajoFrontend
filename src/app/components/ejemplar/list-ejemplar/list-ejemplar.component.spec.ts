import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEjemplarComponent } from './list-ejemplar.component';

describe('ListEjemplarComponent', () => {
  let component: ListEjemplarComponent;
  let fixture: ComponentFixture<ListEjemplarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEjemplarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEjemplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
