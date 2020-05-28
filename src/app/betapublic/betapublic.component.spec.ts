import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetapublicComponent } from './betapublic.component';

describe('BetapublicComponent', () => {
  let component: BetapublicComponent;
  let fixture: ComponentFixture<BetapublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetapublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetapublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
