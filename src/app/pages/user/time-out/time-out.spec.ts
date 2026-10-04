import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeOut } from './time-out';

describe('TimeOut', () => {
  let component: TimeOut;
  let fixture: ComponentFixture<TimeOut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeOut],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeOut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
