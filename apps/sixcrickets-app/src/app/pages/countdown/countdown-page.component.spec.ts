import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '@sixcrickets/shared-domain';
import { of } from 'rxjs';
import { CountdownPageComponent } from './countdown-page.component';


describe('CountdownComponent', () => {
  let component: CountdownPageComponent;
  let fixture: ComponentFixture<CountdownPageComponent>;

  beforeEach(async () => {

    const mockApiService = {
      // not testing interval functionality
      secondsToDeadline: () => of(10)
    }

    await TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useValue: mockApiService }],
      imports: [CountdownPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CountdownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should render clock', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('dlc-deadline-clock')).toBeTruthy();
    expect(compiled.querySelector('.seconds')?.innerHTML).toBe('10');
  });
});
