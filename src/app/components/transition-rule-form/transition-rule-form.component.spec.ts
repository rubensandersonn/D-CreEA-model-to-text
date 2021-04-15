import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionRuleFormComponent } from './transition-rule-form.component';

describe('TransitionRuleFormComponent', () => {
  let component: TransitionRuleFormComponent;
  let fixture: ComponentFixture<TransitionRuleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionRuleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionRuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
