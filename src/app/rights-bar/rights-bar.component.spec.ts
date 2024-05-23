import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsBarComponent } from './rights-bar.component';

describe('RightsBarComponent', () => {
  let component: RightsBarComponent;
  let fixture: ComponentFixture<RightsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightsBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
