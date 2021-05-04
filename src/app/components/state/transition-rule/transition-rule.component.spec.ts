import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionRuleComponent } from './transition-rule.component';

describe('TransitionRuleComponent', () => {
  let component: TransitionRuleComponent;
  let fixture: ComponentFixture<TransitionRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
