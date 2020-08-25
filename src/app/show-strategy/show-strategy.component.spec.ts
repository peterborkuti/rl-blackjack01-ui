import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStrategyComponent } from './show-strategy.component';

describe('ShowStrategyComponent', () => {
  let component: ShowStrategyComponent;
  let fixture: ComponentFixture<ShowStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
