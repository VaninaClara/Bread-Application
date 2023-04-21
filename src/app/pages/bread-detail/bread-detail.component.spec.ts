import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadDetailComponent } from './bread-detail.component';

describe('BreadDetailComponent', () => {
  let component: BreadDetailComponent;
  let fixture: ComponentFixture<BreadDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
