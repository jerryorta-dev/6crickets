import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-deadline-clock',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class MockDeadlineClockComponent {

}

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    const mockApiService = {
      // not testing interval functionality
      secondsToDeadline: () => of(10)
    }


    await TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useValue: mockApiService }],
      imports: [AppComponent, MockDeadlineClockComponent,  RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should render clock', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-deadline-clock')).toBeTruthy();
  });


});
