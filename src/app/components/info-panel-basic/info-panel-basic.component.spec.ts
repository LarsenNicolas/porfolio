import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelBasicComponent } from './info-panel-basic.component';

describe('InfoPanelBasicComponent', () => {
  let component: InfoPanelBasicComponent;
  let fixture: ComponentFixture<InfoPanelBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InfoPanelBasicComponent]
    });
    fixture = TestBed.createComponent(InfoPanelBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
