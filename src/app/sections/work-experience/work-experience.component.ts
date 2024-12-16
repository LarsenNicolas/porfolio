import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoPanelItemsComponent} from "../../components/info-panel-items/info-panel-items.component";

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, InfoPanelItemsComponent],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  title = "Work Experience";
}
