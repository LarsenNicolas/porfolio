import { Component, HostListener } from '@angular/core';
import {InitialComponent} from "./sections/initial/initial.component";
import {AboutComponent} from "./sections/about/about.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    InitialComponent,
    AboutComponent
  ]
})
export class AppComponent {
  isScrolled = false; // Estado que controla si se scrolleó lo suficiente

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 800; // Cambia al valor que prefieras
  }
}
