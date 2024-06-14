import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { DeadlineClockComponent } from './deadline-clock.component';

describe('DeadlineClockComponent', () => {
  let component: DeadlineClockComponent;
  let fixture: ComponentFixture<DeadlineClockComponent>;
  let apiService: Partial<ApiService>;

  beforeEach(async () => {

    const mockApiService = {
      // not testing interval functionality
      secondsToDeadline: () => of(10)
    }

    await TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useValue: mockApiService }],
      imports: [DeadlineClockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeadlineClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiService = fixture.debugElement.injector.get(ApiService);
  });

  it('should receive secondsToDeadline from apiService', () => {
    expect(component.secondsLeft()).toBe(10);
  });
});
