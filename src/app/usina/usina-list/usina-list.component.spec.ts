import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsinaListComponent } from './usina-list.component';

describe('UsinaListComponent', () => {
  let component: UsinaListComponent;
  let fixture: ComponentFixture<UsinaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsinaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
