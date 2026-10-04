import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeIn } from './time-in';

describe('TimeIn', () => {
  let component: TimeIn;
  let fixture: ComponentFixture<TimeIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeIn],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeIn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
