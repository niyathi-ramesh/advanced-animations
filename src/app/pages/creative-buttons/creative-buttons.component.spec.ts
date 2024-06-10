import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeButtonsComponent } from './creative-buttons.component';

describe('CreativeButtonsComponent', () => {
  let component: CreativeButtonsComponent;
  let fixture: ComponentFixture<CreativeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreativeButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
