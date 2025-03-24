import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfeaturesComponent } from './myfeatures.component';

describe('MyfeaturesComponent', () => {
  let component: MyfeaturesComponent;
  let fixture: ComponentFixture<MyfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyfeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
