import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExpressexComponent } from './grid-expressex.component';

describe('GridExpressexComponent', () => {
  let component: GridExpressexComponent;
  let fixture: ComponentFixture<GridExpressexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridExpressexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExpressexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
