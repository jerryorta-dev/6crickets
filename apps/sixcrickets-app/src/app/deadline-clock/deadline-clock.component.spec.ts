import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeadlineClockComponent } from './deadline-clock.component';

describe('DeadlineClockComponent', () => {
  let component: DeadlineClockComponent;
  let fixture: ComponentFixture<DeadlineClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeadlineClockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeadlineClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
