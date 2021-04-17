import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNDropToolComponent } from './drag-n-drop-tool.component';

describe('DragNDropToolComponent', () => {
  let component: DragNDropToolComponent;
  let fixture: ComponentFixture<DragNDropToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragNDropToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragNDropToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
