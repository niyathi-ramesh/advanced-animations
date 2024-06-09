import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformThreeDComponent } from './transform-three-d.component';

describe('TransformThreeDComponent', () => {
  let component: TransformThreeDComponent;
  let fixture: ComponentFixture<TransformThreeDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransformThreeDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformThreeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
