import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFindingComponent } from './state-finding.component';

describe('StateFindingComponent', () => {
  let component: StateFindingComponent;
  let fixture: ComponentFixture<StateFindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateFindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateFindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
