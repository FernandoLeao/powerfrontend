import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsinaDetailComponent } from './usina-detail.component';

describe('UsinaDetailComponent', () => {
  let component: UsinaDetailComponent;
  let fixture: ComponentFixture<UsinaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsinaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsinaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
