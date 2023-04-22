import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBreadComponent } from './create-bread.component';

describe('CreateBreadComponent', () => {
  let component: CreateBreadComponent;
  let fixture: ComponentFixture<CreateBreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
