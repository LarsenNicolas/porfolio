import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoPanelBasicComponent} from "../../components/info-panel-basic/info-panel-basic.component";

@Component({
  selector: 'about',
  standalone: true,
  imports: [CommonModule, InfoPanelBasicComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = "About me."
  content = "My goal is improve my development skills with a clean, scalable architecture, learning day by day."
}
