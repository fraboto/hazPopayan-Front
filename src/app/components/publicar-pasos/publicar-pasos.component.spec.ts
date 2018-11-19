import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarPasosComponent } from './publicar-pasos.component';

describe('PublicarPasosComponent', () => {
  let component: PublicarPasosComponent;
  let fixture: ComponentFixture<PublicarPasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarPasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
