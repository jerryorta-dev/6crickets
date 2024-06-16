import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CameraMatchComponent} from './camera-match.component';

describe('CameraMatchComponent', () => {
  let component: CameraMatchComponent;
  let fixture: ComponentFixture<CameraMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameraMatchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CameraMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
