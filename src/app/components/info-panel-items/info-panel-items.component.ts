import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-panel-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-panel-items.component.html',
  styleUrls: ['./info-panel-items.component.css']
})
export class InfoPanelItemsComponent {
  @Input() title: string = "";
  @Input() content: any[] = [];
}
