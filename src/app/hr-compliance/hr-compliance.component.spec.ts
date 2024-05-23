import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrComplianceComponent } from './hr-compliance.component';

describe('HrComplianceComponent', () => {
  let component: HrComplianceComponent;
  let fixture: ComponentFixture<HrComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrComplianceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
