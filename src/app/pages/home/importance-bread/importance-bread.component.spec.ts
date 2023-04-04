import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanceBreadComponent } from './importance-bread.component';

describe('ImportanceBreadComponent', () => {
  let component: ImportanceBreadComponent;
  let fixture: ComponentFixture<ImportanceBreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportanceBreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportanceBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
