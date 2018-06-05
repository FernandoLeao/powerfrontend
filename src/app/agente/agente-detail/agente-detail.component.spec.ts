import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteDetailComponent } from './agente-detail.component';

describe('AgenteDetailComponent', () => {
  let component: AgenteDetailComponent;
  let fixture: ComponentFixture<AgenteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
