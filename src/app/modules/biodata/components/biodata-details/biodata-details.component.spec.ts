import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataDetailsComponent } from './biodata-details.component';

describe('BiodataDetailsComponent', () => {
  let component: BiodataDetailsComponent;
  let fixture: ComponentFixture<BiodataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiodataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiodataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
