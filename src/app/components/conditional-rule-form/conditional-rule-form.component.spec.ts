import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalRuleFormComponent } from './conditional-rule-form.component';

describe('ConditionalRuleFormComponent', () => {
  let component: ConditionalRuleFormComponent;
  let fixture: ComponentFixture<ConditionalRuleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalRuleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalRuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
