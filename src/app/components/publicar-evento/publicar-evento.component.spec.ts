import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarEventoComponent } from './publicar-evento.component';

describe('PublicarEventoComponent', () => {
  let component: PublicarEventoComponent;
  let fixture: ComponentFixture<PublicarEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
