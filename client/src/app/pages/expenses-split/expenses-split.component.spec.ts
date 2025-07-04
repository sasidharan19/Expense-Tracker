import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesSplitComponent } from './expenses-split.component';

describe('ExpensesSplitComponent', () => {
  let component: ExpensesSplitComponent;
  let fixture: ComponentFixture<ExpensesSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesSplitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
