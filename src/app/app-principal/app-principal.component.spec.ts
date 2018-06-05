
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrincipalComponent } from './app-principal.component';

describe('AppPrincipalComponent', () => {
  let component: AppPrincipalComponent;
  let fixture: ComponentFixture<AppPrincipalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
