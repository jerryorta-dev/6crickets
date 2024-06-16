import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DlcCamerasMatchedComponent} from './dlc-cameras-matched.component';

describe('DlcCamerasMatchedComponent', () => {
  let component: DlcCamerasMatchedComponent;
  let fixture: ComponentFixture<DlcCamerasMatchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlcCamerasMatchedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DlcCamerasMatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
