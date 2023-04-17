import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataEditComponent } from './biodata-edit.component';

describe('BiodataEditComponent', () => {
  let component: BiodataEditComponent;
  let fixture: ComponentFixture<BiodataEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiodataEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiodataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
