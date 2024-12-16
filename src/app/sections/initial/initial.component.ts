import {Component, HostListener, Input} from '@angular/core';
import {NgxTypedJsModule} from "ngx-typed-js";
import {NgIf} from "@angular/common";

@Component({
  selector: 'initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css'],
  imports: [
    NgxTypedJsModule,
    NgIf
  ],
  standalone: true
})
export class InitialComponent {
  @Input()
  isNavbar: boolean = false; // Determina si el navbar está visible



}
