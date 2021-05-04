import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementRuleComponent } from './statement-rule.component';

describe('StatementRuleComponent', () => {
  let component: StatementRuleComponent;
  let fixture: ComponentFixture<StatementRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
