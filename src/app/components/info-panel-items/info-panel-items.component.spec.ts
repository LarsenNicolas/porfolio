import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelItemsComponent } from './info-panel-items.component';

describe('InfoPanelItemsComponent', () => {
  let component: InfoPanelItemsComponent;
  let fixture: ComponentFixture<InfoPanelItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InfoPanelItemsComponent]
    });
    fixture = TestBed.createComponent(InfoPanelItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
