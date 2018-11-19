import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarTurismoComponent } from './publicar-turismo.component';

describe('PublicarTurismoComponent', () => {
  let component: PublicarTurismoComponent;
  let fixture: ComponentFixture<PublicarTurismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarTurismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
