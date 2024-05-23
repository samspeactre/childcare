import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingQualifiedComponent } from './finding-qualified.component';

describe('FindingQualifiedComponent', () => {
  let component: FindingQualifiedComponent;
  let fixture: ComponentFixture<FindingQualifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindingQualifiedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindingQualifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
