import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataAddComponent } from './biodata-add.component';

describe('BiodataAddComponent', () => {
  let component: BiodataAddComponent;
  let fixture: ComponentFixture<BiodataAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiodataAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiodataAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
