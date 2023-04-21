import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsBreadComponent } from './what-is-bread.component';

describe('WhatIsBreadComponent', () => {
  let component: WhatIsBreadComponent;
  let fixture: ComponentFixture<WhatIsBreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsBreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
