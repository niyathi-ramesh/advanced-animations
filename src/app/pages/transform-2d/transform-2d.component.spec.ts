import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transform2DComponent } from './transform-2d.component';

describe('Transform2DComponent', () => {
  let component: Transform2DComponent;
  let fixture: ComponentFixture<Transform2DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Transform2DComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Transform2DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
