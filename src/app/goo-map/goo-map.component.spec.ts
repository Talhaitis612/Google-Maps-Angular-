import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooMapComponent } from './goo-map.component';

describe('GooMapComponent', () => {
  let component: GooMapComponent;
  let fixture: ComponentFixture<GooMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
