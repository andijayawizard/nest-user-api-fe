import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataListComponent } from './biodata-list.component';

describe('BiodataListComponent', () => {
  let component: BiodataListComponent;
  let fixture: ComponentFixture<BiodataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiodataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiodataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
