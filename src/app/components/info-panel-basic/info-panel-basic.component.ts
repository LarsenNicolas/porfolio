import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-panel-basic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-panel-basic.component.html',
  styleUrls: ['./info-panel-basic.component.css']
})
export class InfoPanelBasicComponent {
  @Input() title: string = "";
  @Input() content: string = "";
}
