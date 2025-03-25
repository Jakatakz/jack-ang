import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObpComponent } from './obp.component';

describe('ObpComponent', () => {
  let component: ObpComponent;
  let fixture: ComponentFixture<ObpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
