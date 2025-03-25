import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherModuleToLazyLoadComponent } from './other-module-to-lazy-load.component';

describe('OtherModuleToLazyLoadComponent', () => {
  let component: OtherModuleToLazyLoadComponent;
  let fixture: ComponentFixture<OtherModuleToLazyLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherModuleToLazyLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherModuleToLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
