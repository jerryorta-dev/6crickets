import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DlcDeadlineClockComponent } from './dlc-deadline-clock.component';

describe('DeadlineClockComponent', () => {
  let component: DlcDeadlineClockComponent;
  let fixture: ComponentFixture<DlcDeadlineClockComponent>;

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [DlcDeadlineClockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DlcDeadlineClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should receive input secondsLeft', () => {

    const secondsToDeadline = signal(10);

    component.secondsLeft = secondsToDeadline as unknown as typeof fixture.componentInstance.secondsLeft; // <-- ugh.

    expect(component.secondsLeft()).toBe(10);
  });

  it('should render input secondsLeft', () => {

    const secondsToDeadline = signal(10);

    component.secondsLeft = secondsToDeadline as unknown as typeof fixture.componentInstance.secondsLeft; // <-- ugh.

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.seconds')?.innerHTML).toBe('10');
  });
});
