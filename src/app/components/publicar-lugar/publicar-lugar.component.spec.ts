import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarLugarComponent } from './publicar-lugar.component';

describe('PublicarLugarComponent', () => {
  let component: PublicarLugarComponent;
  let fixture: ComponentFixture<PublicarLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
