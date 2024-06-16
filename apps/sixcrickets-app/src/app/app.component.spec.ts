import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {



    await TestBed.configureTestingModule({

      imports: [AppComponent,  RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });


 it('should render logo', () => {
   fixture.detectChanges();
   const compiled = fixture.nativeElement as HTMLElement;

   expect(compiled.querySelector('.logo')?.innerHTML).toBe('6crickets');
 });

});
