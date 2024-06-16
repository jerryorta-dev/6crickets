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

  it('should initiate with default values', () => {
    expect(component.lowerDistance).toBe(5);
    expect(component.upperDistance).toBe(8);
    expect(component.lowerLightLevel).toBe(540);
    expect(component.upperLightLevel).toBe(860);
  });

  it('should emit rangeSpec on init', () => {
    const emitSpy = jest.spyOn(component.selectedCameraRangeRange, 'emit');
    component.ngOnInit();
    expect(emitSpy).toHaveBeenCalledWith(component.rangeSpec);
  });

  it('should return CameraRangeSpec', () => {
    expect(component.rangeSpec).toEqual({
      distanceRange: [5, 8],
      lightLevelRange: [540, 860]
    });
  });
});
